import { useEffect, useRef } from "react"
import { Link, useMatch } from "react-router-dom"
import { coursesPrice } from "@/utils/data"
import { asset } from "../../utils/asset"
import { Accordion, CourseLink, featureSplit, focusOutline, Section, SectionHeading, usaCoursePrice } from "./shared"

const pricingHighlights = [[85, "Lifetime access"], [86, "Beginner Friendly"], [87, "No Coding Required"]]
const testimonials = [
  { image: 1, video: "https://assets.cdn.filesafe.space/vjZH6eaaO1YqAx3rpmKk/media/6a2a6115d119f1993ac7c213.mp4" },
  { image: 2, video: "https://assets.cdn.filesafe.space/vjZH6eaaO1YqAx3rpmKk/media/6a2a61152719d8cb18bb749f.mp4" },
  { image: 3, video: "https://assets.cdn.filesafe.space/vjZH6eaaO1YqAx3rpmKk/media/6a2a6115d119f1993ac7c21c.mp4" },
  { image: 4, video: "https://assets.cdn.filesafe.space/vjZH6eaaO1YqAx3rpmKk/media/6a2a61152719d8cb18bb7499.mp4" },
  { image: 5, video: "https://assets.cdn.filesafe.space/vjZH6eaaO1YqAx3rpmKk/media/6a2f8567d7e5b817778f38c1.mp4" },
  { image: 6, video: "https://assets.cdn.filesafe.space/vjZH6eaaO1YqAx3rpmKk/media/6a4257813a7f0c54687dbac8.mp4" },
]
const testimonialPlay = "absolute top-1/2 left-1/2 z-20 grid size-12 -translate-1/2 place-items-center rounded-full border-2 border-white bg-black/50 text-white md:size-16.5"
const pricingCard = "rounded-lg border border-control-border p-5"
const socialProfiles = [
  { name: "Pinterest", href: "https://in.pinterest.com/EtsyCreatorstudio99/", icon: "pinterest-p", badge: "bg-pinterest", size: "h-6 w-4.5" },
  { name: "Instagram", href: "https://www.instagram.com/creators_studio99/", icon: "instagram", badge: "bg-instagram", size: "size-5.5" },
  { name: "YouTube", href: "https://www.youtube.com/@creatorsstudio99", icon: "youtube", badge: "bg-youtube", size: "h-5 w-6.5" },
]

export function RazorpayCheckout({ courses = false }) {
  const container = useRef(null)

  useEffect(() => {
    const host = container.current
    const form = document.createElement("form")
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/payment-button.js"
    script.setAttribute("data-payment_button_id", courses ? "pl_TjKlKJXERGp5JW" : "pl_RLoGpzRlA3An1p")
    script.async = true
    script.onerror = () => {
      host.dataset.loadFailed = "true"
    }
    host.append(form)
    form.append(script)

    return () => {
      script.onerror = null
      delete host.dataset.loadFailed
      form.remove()
    }
  }, [courses])

  return <div id="razorpay-checkout" ref={container} hidden />
}

export function Pricing() {
  const usaLanding = useMatch("/digital-product-in-usa")
  const coursesLanding = useMatch("/course")
  const price = coursesLanding ? coursesPrice : usaLanding ? usaCoursePrice : "Starting at ₹699/-"
  return (
    <Section id="pricing">
      <SectionHeading label="Pricing" title="Ready to Turn Your Ideas Into Digital Products?" />
      <div className="grid gap-5.5 md:grid-cols-3 md:gap-9.5">
        <div className={pricingCard}>
          <h3 className="mb-2.5 text-center text-section-label font-bold">Course Highlights</h3>
          <ul className="grid gap-3.5 py-2.5 text-muted max-md:mx-auto max-md:w-fit">{pricingHighlights.map(([icon, title]) => <li className="flex items-center gap-3" key={title}><img src={asset(icon)} alt="" width="28" height="28" loading="lazy" />{title}</li>)}</ul>
        </div>
        <div className={`${pricingCard} md:col-span-2`}>
          <h3 className="mb-2.5 text-3xl font-bold tracking-heading">Description</h3>
          <p className="text-muted">Join the course and learn how to create, launch, and grow a digital product business using beginner-friendly tools like Canva and AI.</p>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
            <strong className="text-xl">{price}</strong>
            <CourseLink />
          </div>
        </div>
      </div>
    </Section>
  )
}

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading label="Success Stories" title="Real Sales. Real Experience." description="Discover real success stories, sales results, and practical insights from the journey of building and growing a digital product business." />
      <div className="mx-auto grid max-w-feature-grid grid-cols-2 gap-3.5 md:grid-cols-3 md:gap-7">
        {testimonials.map(({ image, video }) => (
          <div className="relative aspect-3/4 overflow-hidden rounded-control bg-neutral-200" key={image}>
            <img data-testimonial-poster className="pointer-events-none relative z-10 size-full object-cover" src={`/assets/testimonial-${image}.webp`} alt={`Student testimonial ${image} poster`} width="540" height="720" loading="lazy" />
            {video ? (
              <>
                <button type="button" data-testimonial-play aria-label={`Play student testimonial ${image}`} className={`${testimonialPlay} cursor-pointer ${focusOutline}`}>▶</button>
                <video hidden controls playsInline preload="none" tabIndex={0} data-src={video} aria-label={`Student testimonial ${image}`} className="absolute inset-0 size-full object-cover" />
              </>
            ) : (
              <span className={testimonialPlay} aria-hidden="true">▶</span>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

const faqs = [
  ["Do I need any experience?", "No. The course is designed for complete beginners."],
  ["Do I need design skills?", "No. You'll learn practical workflows and how AI tools can assist."],
  ["How much investment is required?", "The business model is designed to be low-cost compared to many traditional businesses."],
  ["Is this a get-rich-quick scheme?", "No. This course focuses on learning a practical skill and implementing a proven process."],
  ["Can students take this course?", "Yes. The training is beginner-friendly and suitable for learners from different backgrounds."],
]

export function FAQ() {
  return (
    <Section id="faq">
      <div className={featureSplit}>
        <div>
          <SectionHeading align="left" label="FAQ’s" title={<>Frequently<br />Asked Questions</>} description="Find answers to the most common questions about the course, Etsy selling, and getting started." />
          <div className="grid min-h-62 content-center items-center justify-items-center gap-5 rounded-xl bg-black bg-faq-banner bg-contain bg-center bg-no-repeat p-7 pt-11  text-center text-white">
            <h3 className="max-w-141 text-xl leading-snug font-bold">Ready to Learn a Practical Skill That Can Help You Build an Additional Income Stream?</h3>
            <CourseLink />
          </div>
        </div>
        <Accordion items={faqs} group="faq" />
      </div>
    </Section>
  )
}

export function Footer({ showTagline = false }) {
  return (
    <footer className="grid justify-items-center gap-6 bg-black px-6 pt-6 pb-7.5 md:pt-12 text-center text-white">
      <Link to="/#home" className={focusOutline}><img className="block object-contain" src="/assets/logo.webp" alt="Creator Studio, back to home" width="150" height="72" loading="lazy" /></Link>
      {showTagline && <p>Build an additional income stream by creating and selling digital products on Etsy with AI-powered workflows.</p>}
      <nav className="flex gap-6" aria-label="Social platforms">
        {socialProfiles.map(({ name, href, icon, badge, size }) => (
          <Link key={name} to={href} aria-label={name} className={`grid size-9 place-items-center rounded-full ${badge} ${focusOutline}`}>
            <img src={`/assets/social-${icon}.svg`} alt="" className={`${size} object-contain invert`} loading="lazy" />
          </Link>
        ))}
      </nav>
      <p className="max-w-280 text-sm">© 2026 <strong className="font-medium text-brand">Tech Arch Softwares Pvt. Ltd.</strong> All Rights Reserved. This course and all associated materials are protected by copyright law and may not be copied, shared, reproduced, distributed, or resold without prior written consent.</p>
    </footer>
  )
}
