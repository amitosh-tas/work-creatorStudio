import { animate } from "motion/mini"

export function startLandingMotion() {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)")
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return
  const targets = document.querySelectorAll("[data-reveal]")
  const running = new Set()
  const stepStagger = 140
  let nextStepStart = 0

  const observer = new IntersectionObserver((entries) => {
    const now = performance.now()

    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      const target = entry.target
      observer.unobserve(target)

      const isStep = target.dataset.reveal === "step"
      let delay = 0
      if (isStep) {
        const start = Math.max(now, nextStepStart)
        delay = (start - now) / 1000
        nextStepStart = start + stepStagger
      }

      const animation = animate(
        target,
        { opacity: [isStep ? 0 : 0.82, 1], transform: [isStep ? "translateY(22px)" : "translateY(10px)", "translateY(0px)"] },
        { delay, duration: isStep ? 0.45 : 0.36, ease: [0.22, 1, 0.36, 1] },
      )
      running.add(animation)
      animation.then(() => running.delete(animation))
    }
  }, { threshold: 0.15 })

  for (const target of targets) {
    if (target.getBoundingClientRect().bottom > 0) observer.observe(target)
  }

  function finishMotion(event) {
    if (event.matches) stopMotion()
  }

  function stopMotion() {
    observer.disconnect()
    for (const animation of running) animation.complete()
    reducedMotion.removeEventListener("change", finishMotion)
  }

  reducedMotion.addEventListener("change", finishMotion)
  return stopMotion
}
