import { useEffect } from "react"
import Hero from "../components/home/Hero"
import { CourseOverview, ProductExamples } from "../components/home/CourseOverview"
import { BusinessModel } from "../components/home/BusinessModel"
import { CourseFit, Curriculum, Instructor } from "../components/home/CourseDetails"
import { FAQ, Pricing, Testimonials } from "../components/home/Enrollment"

export default function Home() {
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
    </main>
  )
}
