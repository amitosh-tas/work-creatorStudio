import { Sparkles } from "lucide-react"
import { useEffect } from "react"
import { useMatch, useNavigate } from "react-router-dom"
import HLSPlayer from "../components/home/HLSPlayer"
import { CourseLink } from "../components/home/shared"
import { trackLead } from "@/utils/metaPixel"
import { lessonSourceKey } from "@/utils/data"

const lessonVideo = "https://content.apisystem.tech/hls/medias/vjZH6eaaO1YqAx3rpmKk/media/transcoded_videos/cts-a72e06a84132e322_,360,480,720,1080,p.mp4.urlset/master.m3u8"

export default function UnlockFreeLesson() {
  const sharedLesson = Boolean(useMatch("/unlock-free-lesson"))
  const navigate = useNavigate()

  useEffect(() => {
    // Home opens the lesson in the main window when the form redirects inside its iframe.
    if (window.self !== window.top) return

    let lessonSource
    try {
      lessonSource = sessionStorage.getItem(lessonSourceKey)
      if (!sharedLesson) sessionStorage.removeItem(lessonSourceKey)
    } catch {
      // The explicit lesson route still works without browser storage.
    }
    if (sharedLesson && (lessonSource === "/digital-product-in-usa" || lessonSource === "/course")) {
      const destination = lessonSource === "/course"
        ? "/unlock-free-lesson-course/"
        : "/unlock-free-lesson-usa/"
      navigate(destination + window.location.search + window.location.hash, { replace: true })
      return
    }

    if (window.history.state?.lessonLeadTracked) return
    if (typeof window.fbq !== "function") return

    trackLead()
    window.history.replaceState({ ...window.history.state, lessonLeadTracked: true }, "")
  }, [navigate, sharedLesson])

  return (
    <main className="bg-cream px-4 py-10 text-center sm:px-6 md:py-16">
      <div className="mx-auto max-w-280">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-warm-border px-3 py-1 text-xs text-gold-ink">
          <Sparkles size={16} aria-hidden="true" />
          Interactive Course Preview
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-heading md:text-4xl">Experience the Course Before You Enroll</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted leading-section-copy">
          Watch an actual lesson and explore the complete learning experience before making your decision. Watch the first lesson completely free, and the remaining premium lessons unlock instantly after enrollment.
        </p>
        <div className="mt-5 overflow-hidden rounded-sm border border-ink">
          <HLSPlayer
            src={lessonVideo}
            poster="/assets/hero-poster-768.webp"
            posterSet="/assets/hero-poster-480.webp 480w, /assets/hero-poster-768.webp 768w"
            posterSizes="(max-width: 640px) calc(100vw - 32px), min(calc(100vw - 48px), 1120px)"
            label="Free Etsy course lesson"
            autoplay
          />
        </div>
        <div className="mt-8">
          <CourseLink />
        </div>
      </div>
    </main>
  )
}
