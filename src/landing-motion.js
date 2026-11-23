import { animate } from "motion/mini"

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)")

if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const targets = document.querySelectorAll(
    ".landing-section .section-heading, .landing-card, .business-steps li, .instructor-photo, .curriculum-photo",
  )
  const running = new Set()
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      observer.unobserve(entry.target)

      const animation = animate(
        entry.target,
        { opacity: [0.82, 1], transform: ["translateY(10px)", "translateY(0px)"] },
        { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
      )
      running.add(animation)
      animation.then(() => running.delete(animation))
    }
  }, { threshold: 0.15 })

  for (const target of targets) {
    if (target.getBoundingClientRect().bottom > 0) observer.observe(target)
  }

  function finishMotion(event) {
    if (!event.matches) return
    observer.disconnect()
    for (const animation of running) animation.complete()
    reducedMotion.removeEventListener("change", finishMotion)
  }

  reducedMotion.addEventListener("change", finishMotion)
}
