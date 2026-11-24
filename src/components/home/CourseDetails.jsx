import { ComparisonTable } from "./BusinessModel"
import { asset } from "../../utils/asset"
import { Accordion, CheckItem, CourseLink, featureSplit, featureTitle, Pill, Section, SectionHeading } from "./shared"

const audiences = [
  ["Who This Course Is For", "If you can use a phone or laptop for an hour a day, you can do this.", ["Complete beginners", "Students", "Working professionals", "Housewives", "Freelancers", "Side hustlers", "Small business owners"]],
  ["Who This Course Is NOT For", "This course takes time and practice.", ["People who want overnight success", "Anyone hunting for a get-rich-quick scheme", "People who don’t want to learn a new skill", "Anyone expecting guaranteed income without effort"]],
]

const courseFeatures = ["Structured learning", "Step-by-step roadmap", "Updated content", "Practical workflow", "Templates", "AI prompts", "Community support", "Lifetime access", "Bonuses", "Clear action plan"]

const highlights = [
  "30-minute bite-sized lessons", "Learn at your own pace", "Lifetime access", "Future updates included",
  "Beginner friendly", "Mobile friendly", "Downloadable resources", "Practical assignments",
]

export function CourseFit() {
  return (
    <Section tone="cream">
      <SectionHeading pill label="Why This Course" title="Is This Course Right For You?" description="Find out who this course is designed for and what it takes to get started." />
      <div className="mx-auto mt-9 mb-13.5 grid max-w-feature-grid gap-5.5 md:mt-17 md:mb-26 md:grid-cols-2 md:gap-7.5">
        {audiences.map(([title, description, items], index) => (
          <article data-reveal className={`min-h-70 rounded-panel px-5 py-7 shadow-panel ${index === 0 ? "bg-white" : "bg-sand"}`} key={title}>
            <h3 className="text-section-label font-bold">{title}</h3><p className="mt-1.25 mb-7">{description}</p>
            <ul className={`grid gap-x-4 gap-y-1.75 ${index === 0 ? "grid-cols-2" : ""}`}>
              {items.map(item => <CheckItem key={item} negative={index !== 0}>{item}</CheckItem>)}
            </ul>
          </article>
        ))}
      </div>
      <SectionHeading pill label="Free vs Structured" title={<>This Course vs Random<br />YouTube Videos</>} description="Free content gives you pieces. A system gives you a finished shop." />
      <ComparisonTable course className="mb-13.5 md:mb-26" headings={["What You Get", "This Course", "YouTube"]} rows={courseFeatures.map(feature => [feature, "✓", "×"])} />
      <SectionHeading pill label="Quick Highlights" title="Built to Actually Be Finished" />
      <ul className="mx-auto grid max-w-feature-grid grid-cols-2 gap-3.5 md:gap-x-7 md:gap-y-5 lg:grid-cols-4">
        {highlights.map((label, index) => <li data-reveal className="flex min-h-24 items-center gap-3 rounded-panel bg-white p-3 leading-tight font-semibold shadow-panel md:px-5 md:py-3.5" key={label}><img className="shrink-0" src={asset(65 + index)} alt="" width="32" height="32" loading="lazy" />{label}</li>)}
      </ul>
    </Section>
  )
}

export function Instructor() {
  return (
    <Section>
      <SectionHeading label="My Journey" title="Built From Real-World Experience" />
      <div className={featureSplit}>
        <img data-reveal className="aspect-27/25 w-full rounded-xl object-contain object-top" src={asset(73, "webp")} alt="Mohan Singh working at his desk" loading="lazy" />
        <div>
          <Pill>Quick Highlights</Pill>
          <h3 className={`${featureTitle} mb-5`}>15+ years in IT. 1,500+ Etsy sales. One repeatable system.</h3>
          <p className="mb-3.5 leading-relaxed text-muted">I spent over 15 years in the IT industry building software solutions for businesses. Good work, but every rupee was tied to hours at a desk.</p>
          <p className="mb-3.5 leading-relaxed text-muted">Then I discovered Etsy. I started creating simple digital products, learned what buyers actually search for, and built a store that sells while I sleep.</p>
          <p className="mb-3.5 leading-relaxed text-muted">Over 1,500 sales later, I teach the same process in this course.</p>
          <ul className="mt-7.5 mb-9 grid gap-x-4 gap-y-1.75 text-muted md:grid-cols-2">{["1,500+ real Etsy sales", "Tested AI + Canva workflow", "Taught for complete beginners", "Updated as Etsy and AI change"].map(item => <CheckItem key={item}>{item}</CheckItem>)}</ul>
          <CourseLink lesson />
        </div>
      </div>
    </Section>
  )
}

const modules = [
  ["Introduction: Welcome to the Course", "Welcome to AI Digital Products Mastery. In this introductory lesson, discover how digital products can become a scalable source of passive income, what you’ll learn throughout the course, and the roadmap we’ll follow to build your online business."],
  ["What Are Digital Products?", "Understand the fundamentals of digital products, why they're one of the most profitable online business models, and how you can create once and sell repeatedly without inventory, shipping, or physical products."],
  ["Module 1: Create Your Etsy Account", "Set up your Etsy seller account step by step, connect your payment methods, configure your shop settings, and prepare your store to start selling digital products worldwide."],
  ["Module 2: Scale to Passive Income", "Discover how to grow your digital product business using automation, product bundles, Pinterest marketing, Instagram traffic, repeat customers, and email marketing."],
  ["Module 3: Finding Winning Products", "Learn how to identify profitable digital product ideas through Etsy research, evergreen niches, customer demand, and proven product validation strategies."],
  ["Module 4: AI Product Creation", "Master the process of creating high-quality digital products using ChatGPT, Canva, AI prompts, templates, and an efficient production system that saves time."],
  ["Module 5: Etsy Listing System", "Learn how to optimize your product listings with powerful titles, SEO-friendly tags, compelling thumbnails, and persuasive descriptions that attract buyers."],
  ["Module 6: Your First 10 Sales", "Implement proven launch strategies, pricing techniques, and consistency habits designed to help you achieve your first Etsy sales with confidence."],
  ["Module 7: The New Digital Products Opportunity", "Discover why AI-powered digital products are transforming online businesses and learn why this opportunity is perfect for beginners looking to build long-term passive income."],
  ["1 Bonus – Etsy Account Setup Checklist (India 2026)", "Access a complete checklist covering all the documents, payment setup, Payoneer configuration, banking details, and verification requirements needed to start selling from India."],
  ["2 Bonus – Done-for-You Digital Products Pack", "Kickstart your journey with five ready-to-launch digital products that you can customize, upload, and start selling immediately while saving hours of design work."],
]

export function Curriculum() {
  return (
    <Section id="free-lesson" className="max-md:pb-3">
      <SectionHeading label="A Roadmap For Success" title="The Complete Digital Product Roadmap for Beginners" />
      <div className={featureSplit}>
        <Accordion items={modules} group="curriculum" />
        <img data-reveal className="aspect-22/25 w-full max-w-150 justify-self-center rounded-xl object-contain object-top" src={asset(74, "webp")} alt="Mohan Singh seated at his desk" loading="lazy" />
      </div>
    </Section>
  )
}
