import { asset } from "../../utils/asset"
import { featureTitle, CourseLink, Section, SectionHeading } from "./shared"

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
    <Section id="about" tone="blue" flushBottom>
      <SectionHeading label="Why This Course" title="Looking for a Practical Way to Build an Additional Income Stream?" description="Many online income opportunities seem appealing at first, but they often come with challenges that make it difficult for beginners to get started and stay consistent." />
      <div className="mb-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:mb-19.5 md:gap-5 lg:grid-cols-4">
        {challenges.map(([title, description], index) => (
          <article data-reveal className="rounded-2xl bg-white px-3.75 py-7 text-center shadow-panel lg:min-h-77.5" key={title}>
            <img className="mx-auto mb-4.5 size-17.5" src={asset(9 + index)} width="70" height="70" alt="" loading="lazy" />
            <h3 className="font-bold">{title}</h3>
            <p className="mt-3 leading-card-copy text-card-copy">{description}</p>
          </article>
        ))}
      </div>
      <SectionHeading label="What You’ll Learn" title="A Simpler Way to Build a Digital Product Business" />
      <div className="grid items-center gap-5.5 md:gap-7.5 lg:flex">
        <div className="min-w-0 rounded-2xl border border-control-border bg-white px-5 pt-6 pb-7.5 lg:flex-100">
          <h3 className={featureTitle}>Turn Your Ideas into Digital Products That Generate Income</h3>
          <p className="mt-5 mb-7 leading-card-copy">Learn the skills, systems, and strategies needed to create and sell successful digital products online. Whether you’re a complete beginner or looking for a structured roadmap, this course will guide you through every stage of building and growing your digital product business.</p>
          <CourseLink />
        </div>
        <img className="hidden aspect-28/25 w-full self-end object-contain object-bottom lg:block lg:min-w-0 lg:flex-115" src={asset(13, "webp")} alt="Mohan Singh pointing to the course outcomes" loading="lazy" />
        <ul className="grid gap-4.5 pb-10.5 md:grid-cols-2 lg:min-w-0 lg:flex-83 lg:grid-cols-1 lg:pb-0">
          {outcomes.map(outcome => (
            <li className="flex min-h-19 items-center gap-3 rounded-lg border border-neutral-800 px-3.5 py-2.5 hover:bg-brand motion-safe:transition-colors motion-safe:duration-200" key={outcome}>
              <img className="shrink-0" src={asset(84)} alt="" width="42" height="42" loading="lazy" />
              {outcome}
            </li>
          ))}
        </ul>
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
    <Section tone="gold" className="max-md:pb-3">
      <SectionHeading pill label="Start Here" title="What Exactly Are Digital Products?" description="A digital product is a file a customer downloads instantly. You create it once and sell the same file unlimited times." />
      <div
        aria-label="Digital product examples"
        role="region"
        tabIndex={0}
        className="grid gap-3.5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus max-md:-mx-4 max-md:auto-cols-[44%] max-md:grid-flow-col max-md:snap-x max-md:snap-proximity max-md:overflow-x-auto max-md:scroll-px-4 max-md:px-4 max-md:py-3 md:grid-cols-3 md:gap-x-5 md:gap-y-6.5 lg:grid-cols-5"
      >
        {products.map(([image, title, description, extension = "jpeg"]) => (
          <article data-reveal className="rounded-2xl bg-white px-2.75 pt-2.5 pb-5.5 shadow-panel max-md:snap-start md:rounded-panel" key={title}>
            <img className="aspect-square w-full rounded-xl object-cover md:rounded-inset" src={asset(image, extension)} alt="" loading="lazy" />
            <h3 className="mt-3 font-bold">{title}</h3>
            <p className="mt-3 text-product-copy leading-card-copy text-card-copy">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 text-center md:mt-12"><CourseLink lesson /></div>
    </Section>
  )
}
