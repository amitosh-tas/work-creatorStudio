import { asset, Accordion, CourseLink, Section, SectionHeading } from "./shared"

const pricingHighlights = [[85, "Lifetime access"], [86, "Beginner Friendly"], [87, "No Coding Required"]]
const testimonials = [1, 2, 3, 4, 5, 6]

export function Pricing() {
  return (
    <Section id="pricing" className="pricing">
      <SectionHeading label="Pricing" title="Ready to Turn Your Ideas Into Digital Products?" />
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Course Highlights</h3>
          <ul>{pricingHighlights.map(([icon, title]) => <li key={title}><img src={asset(icon)} alt="" width="28" height="28" loading="lazy" />{title}</li>)}</ul>
        </div>
        <div className="pricing-card">
          <h3>Description</h3>
          <p>Join the course and learn how to create, launch, and grow a digital product business using beginner-friendly tools like Canva and AI.</p>
          <div className="pricing-action">
            <strong>Starting at ₹699/-</strong>
            <button className="course-button" type="button" disabled>Join Now</button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="testimonials">
      <SectionHeading label="Success Stories" title="Real Sales. Real Experience." description="Discover real success stories, sales results, and practical insights from the journey of building and growing a digital product business." />
      <div className="testimonials-grid">
        {testimonials.map(image => (
          <div className="testimonial-poster" key={image}>
            <img src={`/assets/testimonial-${image}.webp`} alt={`Student testimonial ${image} poster`} width="540" height="720" loading="lazy" />
            <span className="testimonial-play" aria-hidden="true">▶</span>
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
    <Section id="faq" className="faq">
      <div className="feature-split">
        <div className="faq-intro">
          <SectionHeading label="FAQ’s" title={<>Frequently<br />Asked Questions</>} description="Find answers to the most common questions about the course, Etsy selling, and getting started." />
          <div className="faq-cta">
            <h3>Ready to Learn a Practical Skill That Can Help You Build an Additional Income Stream?</h3>
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
    <footer className="landing-footer">
      <a href="#home"><img src="/assets/logo.webp" alt="Creator Studio, back to home" width="150" height="72" loading="lazy" /></a>
      <div className="footer-socials" aria-label="Social platforms">
        <span className="footer-socials__pinterest" role="img" aria-label="Pinterest">p</span>
        <span className="footer-socials__instagram" role="img" aria-label="Instagram">◎</span>
        <span className="footer-socials__youtube" role="img" aria-label="YouTube">▶</span>
      </div>
      <p>© 2026 <strong>Tech Arch Softwares Pvt. Ltd.</strong> All Rights Reserved. This course and all associated materials are protected by copyright law and may not be copied, shared, reproduced, distributed, or resold without prior written consent.</p>
    </footer>
  )
}
