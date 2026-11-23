import { asset } from "../../utils/asset"
import { Accordion, courseButton, CourseLink, featureSplit, focusOutline, goldButton, Section, SectionHeading } from "./shared"

const pricingHighlights = [[85, "Lifetime access"], [86, "Beginner Friendly"], [87, "No Coding Required"]]
const testimonials = [
  { image: 1, video: "https://assets.cdn.filesafe.space/vjZH6eaaO1YqAx3rpmKk/media/6a2a6115d119f1993ac7c213.mp4" },
  { image: 2 },
  { image: 3 },
  { image: 4 },
  { image: 5 },
  { image: 6 },
]
const testimonialPlay = "absolute top-1/2 left-1/2 grid size-12 -translate-1/2 place-items-center rounded-full border-2 border-white bg-black/50 text-white md:size-16.5"
const pricingCard = "rounded-lg border border-control-border p-5"
const socialIcon = "grid size-9 place-items-center rounded-full font-bold text-white"

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading label="Pricing" title="Ready to Turn Your Ideas Into Digital Products?" />
      <div className="grid gap-5.5 md:grid-cols-3 md:gap-9.5">
        <div className={pricingCard}>
          <h3 className="mb-2.5 text-center text-section-label font-bold">Course Highlights</h3>
          <ul className="grid gap-3.5 py-2.5 text-muted">{pricingHighlights.map(([icon, title]) => <li className="flex items-center gap-3" key={title}><img src={asset(icon)} alt="" width="28" height="28" loading="lazy" />{title}</li>)}</ul>
        </div>
        <div className={`${pricingCard} md:col-span-2`}>
          <h3 className="mb-2.5 text-3xl font-bold tracking-heading">Description</h3>
          <p className="text-muted">Join the course and learn how to create, launch, and grow a digital product business using beginner-friendly tools like Canva and AI.</p>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
            <strong className="text-xl">Starting at ₹699/-</strong>
            <button className={`${courseButton} ${goldButton}`} type="button" disabled>Join Now</button>
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
            <img className="size-full object-cover" src={`/assets/testimonial-${image}.webp`} alt={`Student testimonial ${image} poster`} width="540" height="720" loading="lazy" />
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
  ["Do I need design skills?", "The course walks through creating digital products with beginner-friendly tools like Canva and AI."],
  ["How much investment is required?", "The course starts at ₹699. The digital product model shown above can be started for under ₹1,000."],
  ["Is this a get-rich-quick scheme?", "Building a shop takes time, practice, and consistent effort. Income is not guaranteed."],
  ["Can students take this course?", "Yes. The course is self-paced and suitable for students."],
]

export function FAQ() {
  return (
    <Section id="faq">
      <div className={featureSplit}>
        <div>
          <SectionHeading align="left" label="FAQ’s" title={<>Frequently<br />Asked Questions</>} description="Find answers to the most common questions about the course, Etsy selling, and getting started." />
          <div className="grid min-h-61.25 content-center justify-items-center gap-9 rounded-xl bg-black bg-faq-banner bg-cover bg-center bg-no-repeat p-7 text-center text-white">
            <h3 className="max-w-141 text-xl leading-snug font-bold">Ready to Learn a Practical Skill That Can Help You Build an Additional Income Stream?</h3>
            <CourseLink />
          </div>
        </div>
        <Accordion items={faqs} group="faq" />
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="grid justify-items-center gap-6 bg-black px-6 pt-12 pb-7.5 text-center text-white">
      <a href="#home" className={focusOutline}><img className="block object-contain" src="/assets/logo.webp" alt="Creator Studio, back to home" width="150" height="72" loading="lazy" /></a>
      <div className="flex gap-6" aria-label="Social platforms">
        <span className={`${socialIcon} bg-pinterest font-serif text-2xl italic`} role="img" aria-label="Pinterest">p</span>
        <span className={`${socialIcon} bg-instagram text-xl`} role="img" aria-label="Instagram">◎</span>
        <span className={`${socialIcon} bg-youtube text-sm`} role="img" aria-label="YouTube">▶</span>
      </div>
      <p className="max-w-280 text-sm">© 2026 <strong className="font-medium text-brand">Tech Arch Softwares Pvt. Ltd.</strong> All Rights Reserved. This course and all associated materials are protected by copyright law and may not be copied, shared, reproduced, distributed, or resold without prior written consent.</p>
    </footer>
  )
}
