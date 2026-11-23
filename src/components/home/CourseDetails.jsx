import { ComparisonTable } from "./BusinessModel"
import { asset, Accordion, CourseLink, Section, SectionHeading } from "./shared"

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
    <Section tone="cream" className="course-fit">
      <SectionHeading pill label="Why This Course" title="Is This Course Right For You?" description="Find out who this course is designed for and what it takes to get started." />
      <div className="audience-grid">
        {audiences.map(([title, description, items], index) => (
          <article className={`landing-card audience-card audience-card--${index + 1}`} key={title}>
            <h3>{title}</h3><p>{description}</p>
            <ul>{items.map(item => <li key={item}><span aria-hidden="true">{index === 0 ? "✓" : "×"}</span>{item}</li>)}</ul>
          </article>
        ))}
      </div>
      <SectionHeading pill label="Free vs Structured" title={<>This Course vs Random<br />YouTube Videos</>} description="Free content gives you pieces. A system gives you a finished shop." />
      <ComparisonTable className="comparison-table--course" headings={["What You Get", "This Course", "YouTube"]} rows={courseFeatures.map(feature => [feature, "✓", "×"])} />
      <SectionHeading pill label="Quick Highlights" title="Built to Actually Be Finished" />
      <ul className="highlight-grid">
        {highlights.map((label, index) => <li className="landing-card" key={label}><img src={asset(65 + index)} alt="" width="32" height="32" loading="lazy" />{label}</li>)}
      </ul>
    </Section>
  )
}

export function Instructor() {
  return (
    <Section className="instructor">
      <SectionHeading label="My Journey" title="Built From Real-World Experience" />
      <div className="feature-split">
        <img className="instructor-photo" src={asset(73, "webp")} alt="Mohan Singh working at his desk" loading="lazy" />
        <div className="instructor-copy">
          <p className="section-pill">Quick Highlights</p>
          <h3>15+ years in IT. 1,500+ Etsy sales. One repeatable system.</h3>
          <p>I spent over 15 years in the IT industry building software solutions for businesses. Good work, but every rupee was tied to hours at a desk.</p>
          <p>Then I discovered Etsy. I started creating simple digital products, learned what buyers actually search for, and built a store that sells while I sleep.</p>
          <p>Over 1,500 sales later, I teach the same process in this course.</p>
          <ul>{["1,500+ real Etsy sales", "Tested AI + Canva workflow", "Taught for complete beginners", "Updated as Etsy and AI change"].map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
          <CourseLink lesson />
        </div>
      </div>
    </Section>
  )
}

const modules = [
  ["Introduction: Welcome to the Course", "Welcome to AI Digital Products Mastery. In this introductory lesson, discover how digital products can become a scalable source of passive income, what you’ll learn throughout the course, and the roadmap we’ll follow to build your online business."],
  ["What Are Digital Products?", "Explore common downloadable products and how they’re sold on Etsy."],
  ["Module 1: Create Your Etsy Account", "Walk through opening your account and setting up an Etsy shop."],
  ["Module 2: Scale to Passive Income", "Learn how reusable digital files and automatic delivery support more sales."],
  ["Module 3: Finding Winning Products", "Research shopper demand and identify promising product ideas."],
  ["Module 4: AI Product Creation", "Use AI and Canva to create your downloadable products."],
  ["Module 5: Etsy Listing System", "Build your listings with titles, tags, and product images."],
  ["Module 6: Your First 10 Sales", "Plan the first steps after publishing your listings."],
  ["Module 7: The New Digital Products Opportunity", "Explore ways to expand your digital product range."],
  ["1 Bonus – Etsy Account Setup Checklist (India 2026)", "A checklist for setting up an Etsy account in India."],
  ["2 Bonus – Done-for-You Digital Products Pack", "A pack of digital products to explore as you build your shop."],
]

export function Curriculum() {
  return (
    <Section id="free-lesson" className="curriculum">
      <SectionHeading label="A Roadmap For Success" title="The Complete Digital Product Roadmap for Beginners" />
      <div className="feature-split">
        <Accordion items={modules} group="curriculum" />
        <img className="curriculum-photo" src={asset(74, "webp")} alt="Mohan Singh seated at his desk" loading="lazy" />
      </div>
    </Section>
  )
}
