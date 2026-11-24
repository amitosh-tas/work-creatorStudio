class HeroHLSPlayer extends HTMLElement {
  #session = null

  connectedCallback() {
    this.addEventListener("click", this.#onPlay)
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.#onPlay)
    this.#reset()
  }

  #onPlay = (event) => {
    if (event.target.closest("[data-play]") && !this.#session) {
      this.#start(event.detail === 0)
    }
  }

  async #start(keyboardActivation) {
    const video = this.querySelector("video")
    const quality = this.querySelector("select")
    const poster = this.querySelector("[data-poster]")
    const play = this.querySelector("[data-play]")
    const status = this.querySelector("[data-video-status]")
    const source = this.dataset.src
    const controller = new AbortController()
    const { signal } = controller
    const session = { controller, video, hls: null, timeout: null, revealed: false }
    this.#session = session
    status.textContent = "Loading video…"
    play.setAttribute("aria-disabled", "true")
    video.preload = "auto"
    video.hidden = false

    const fail = (message = "The video couldn’t load. Select Play to retry.") => {
      if (signal.aborted) return
      const hadFocus = this.contains(document.activeElement)
      this.#reset()
      status.textContent = message
      if (hadFocus) play.focus({ preventScroll: true })
    }

    const revealVideo = () => {
      if (signal.aborted || session.revealed) return
      clearTimeout(session.timeout)
      session.revealed = true
      if (keyboardActivation && document.activeElement === play) video.focus({ preventScroll: true })
      poster.hidden = true
      this.setAttribute("data-playing", "")
      quality.hidden = quality.options.length < 3
      status.textContent = ""
    }

    const beginPlayback = () => {
      video.play().catch((error) => {
        // The native controls remain available if the browser blocks autoplay.
        if (error.name === "NotAllowedError") revealVideo()
        else if (error.name !== "AbortError") fail()
      })
    }

    const supportsNative = video.canPlayType("application/vnd.apple.mpegurl")
    const playNative = () => {
      video.addEventListener("error", () => fail(), { once: true, signal })
      video.src = source
      beginPlayback()
    }

    video.addEventListener("loadeddata", revealVideo, { once: true, signal })
    session.timeout = setTimeout(() => fail(), 25000)

    try {
      if (supportsNative && !window.MediaSource && !window.ManagedMediaSource && !window.WebKitMediaSource) {
        playNative()
        return
      }

      const { default: Hls } = await import("hls.js").catch((error) => {
        if (!supportsNative) throw error
        return {}
      })
      if (signal.aborted) return

      if (!Hls?.isSupported()) {
        if (supportsNative) playNative()
        else fail("This browser doesn’t support HLS video playback.")
        return
      }

      const hls = new Hls()
      session.hls = hls

      quality.addEventListener("change", () => {
        if (session.hls) session.hls.nextLevel = Number(quality.value)
      }, { signal })

      hls.once(Hls.Events.MEDIA_ATTACHED, () => hls.loadSource(source))
      hls.once(Hls.Events.MANIFEST_PARSED, () => {
        const levels = new Map()
        hls.levels.forEach(({ height }, index) => {
          if (height) levels.set(height, index)
        })
        for (const [height, index] of [...levels].sort(([a], [b]) => a - b)) {
          quality.add(new Option(`${height}p`, String(index)))
        }
        beginPlayback()
      })

      hls.on(Hls.Events.ERROR, (_event, { fatal }) => {
        if (!fatal) return
        if (supportsNative && !session.revealed) {
          session.hls = null
          hls.destroy()
          quality.options.length = 1
          playNative()
        } else {
          fail()
        }
      })

      hls.attachMedia(video)
    } catch {
      fail()
    }
  }

  #reset() {
    if (!this.#session) return

    const { controller, hls, timeout, video } = this.#session
    this.#session = null
    controller.abort()
    clearTimeout(timeout)
    hls?.destroy()
    video.preload = "none"
    video.removeAttribute("src")
    video.load()
    video.hidden = true
    const quality = this.querySelector("select")
    if (quality) {
      quality.hidden = true
      quality.options.length = 1
      quality.value = "-1"
    }
    const poster = this.querySelector("[data-poster]")
    if (poster) poster.hidden = false
    this.querySelector("[data-play]")?.removeAttribute("aria-disabled")
    const status = this.querySelector("[data-video-status]")
    if (status) status.textContent = ""
    this.removeAttribute("data-playing")
  }
}

customElements.define("hero-hls-player", HeroHLSPlayer)
