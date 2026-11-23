import { asset, CourseLink, Section, SectionHeading } from "./shared"

const challenges = [
  ["High Learning Curves", "Many online business models require technical skills, coding knowledge, or complex tools that can feel overwhelming for beginners."],
  ["Trading Time for Money", "Freelancing and service-based work often require constant client acquisition and active involvement to generate income."],
  ["High Costs and Risk", "Traditional businesses and many online ventures can require significant upfront investment, inventory, or paid advertising."],
  ["Information Overload", "With countless videos, blogs, and courses available online, many people struggle to find a clear path and end up stuck in endless research."],
]

const outcomes = [
  "Create Products Without Technical Skills",
  "Sell Without Inventory or Shipping",
  "Follow a Proven Step-by-Step System",
  "Build a Scalable Digital Asset",
]

export function CourseOverview() {
  return (
    <Section id="about" tone="blue" className="course-overview">
      <SectionHeading label="Why This Course" title="Looking for a Practical Way to Build an Additional Income Stream?" description="Many online income opportunities seem appealing at first, but they often come with challenges that make it difficult for beginners to get started and stay consistent." />
      <div className="challenge-grid">
        {challenges.map(([title, description], index) => (
          <article className="landing-card challenge-card" key={title}>
            <img className="challenge-icon" src={asset(9 + index)} width="70" height="70" alt="" loading="lazy" />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <SectionHeading label="What You’ll Learn" title="A Simpler Way to Build a Digital Product Business" />
      <div className="outcomes-grid">
        <div className="outcomes-intro">
          <h3>Turn Your Ideas into Digital Products That Generate Income</h3>
          <p>Learn the skills, systems, and strategies needed to create and sell successful digital products online. Whether you’re a complete beginner or looking for a structured roadmap, this course will guide you through every stage of building and growing your digital product business.</p>
          <CourseLink />
        </div>
        <img src={asset(13, "webp")} alt="Mohan Singh pointing to the course outcomes" loading="lazy" />
        <ul>{outcomes.map(outcome => <li key={outcome}><img src={asset(84)} alt="" width="42" height="42" loading="lazy" />{outcome}</li>)}</ul>
      </div>
    </Section>
  )
}

const products = [
  [14, "Printable Planners", "Daily, weekly and monthly planners buyers print at home."],
  [15, "Wedding Invitations", "Editable invitation templates couples customise themselves."],
  [16, "Resume Templates", "Clean CV layouts job seekers buy again and again."],
  [17, "Budget Planners", "Money trackers and expense sheets for families."],
  [18, "Kids Worksheets", "Learning and activity packs parents love."],
  [19, "Wall Art Prints", "Downloadable art buyers print and frame."],
  [20, "Business Templates", "Invoices, proposals and contracts for small businesses."],
  [21, "Digital Journals", "Tablet-friendly journals for iPad and Android users."],
  [22, "Social Media Templates", "Instagram post packs for creators and brands.", "webp"],
  [23, "Notion Templates", "Ready-made workspaces people set up in one click."],
]

export function ProductExamples() {
  return (
    <Section tone="gold">
      <SectionHeading pill label="Start Here" title="What Exactly Are Digital Products?" description="A digital product is a file a customer downloads instantly. You create it once and sell the same file unlimited times." />
      <div className="product-grid">
        {products.map(([image, title, description, extension = "jpeg"]) => (
          <article className="landing-card product-card" key={title}>
            <img src={asset(image, extension)} alt="" loading="lazy" />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <div className="section-action"><CourseLink lesson /></div>
    </Section>
  )
}
