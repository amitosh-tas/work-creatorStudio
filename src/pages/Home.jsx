import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { useMatch, useNavigate } from "react-router-dom"
import Hero from "../components/home/Hero"
import { CourseOverview, ProductExamples } from "../components/home/CourseOverview"
import { BusinessModel } from "../components/home/BusinessModel"
import { CourseFit, Curriculum, Instructor } from "../components/home/CourseDetails"
import { FAQ, Pricing, Testimonials } from "../components/home/Enrollment"

export default function Home() {
  const navigate = useNavigate()
  const usaLanding = useMatch("/digital-product-in-usa")
  const lessonUnlocked = useRef(false)

  useEffect(() => {
    const controller = new AbortController()
    let stopMotion

    if (matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      window.addEventListener("scroll", () => {
        import("../landing-motion.js").then(({ startLandingMotion }) => {
          if (!controller.signal.aborted) stopMotion = startLandingMotion()
        }).catch(() => {})
      }, { once: true, passive: true, signal: controller.signal })
    }

    return () => {
      controller.abort()
      stopMotion?.()
    }
  }, [])

  return (
    <main>
      <Hero />
      <CourseOverview />
      <ProductExamples />
      <BusinessModel />
      <CourseFit />
      <Instructor />
      <Curriculum />
      <Pricing />
      <Testimonials />
      <FAQ />
      <dialog
        id="free-lesson-dialog"
        aria-labelledby="free-lesson-dialog-title"
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[45rem] overflow-y-auto rounded-[1.875rem] bg-white p-0 text-ink shadow-panel backdrop:bg-black/50"
      >
        <h2 id="free-lesson-dialog-title" className="sr-only">Unlock Free Lesson</h2>
        <form method="dialog" className="sticky top-0 z-10 flex justify-end bg-white px-3 pt-3">
          <button type="submit" aria-label="Close free lesson form" className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-ink text-white hover:bg-ink/80">
            <X size={20} aria-hidden="true" />
          </button>
        </form>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/d1dBNxJoHnIVzIJis765"
          title="Etsy Course Form"
          loading="lazy"
          className="block h-[32rem] w-full border-0"
          onLoad={(event) => {
            if (lessonUnlocked.current) return

            let pathname
            try {
              pathname = event.currentTarget.contentWindow.location.pathname
            } catch {
              // The form remains cross-origin until it redirects back to this site.
              return
            }
            if (pathname === "/unlock-free-lesson" || pathname === "/unlock-free-lesson/") {
              lessonUnlocked.current = true
              navigate(usaLanding ? "/digital-product-in-usa/unlock-free-lesson/" : "/unlock-free-lesson/")
            }
          }}
        />
      </dialog>
    </main>
  )
}
