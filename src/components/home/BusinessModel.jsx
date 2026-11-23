import { asset } from "../../utils/asset"
import { Section, SectionHeading } from "./shared"

const steps = [
  ["Create Product using AI", "Use simple AI prompts to generate the content of your product in minutes."],
  ["Design with Canva", "Turn that content into a beautiful, sellable file using free Canva templates."],
  ["Upload to Etsy", "List your product with titles, tags, and images that help shoppers find it."],
  ["Customer Purchases", "Shoppers find and buy your listing on Etsy."],
  ["Automatic Delivery", "Etsy delivers the file instantly."],
  ["You Receive Payment", "Money lands in your account. The same file can sell again tomorrow."],
]

const advantages = ["No Inventory", "No Shipping", "No Customer Meetings", "No Coding", "Work From Anywhere"]

const businessRows = [
  ["Investment", "₹50,000–₹5,00,000 upfront", "Under ₹1,000 to start"],
  ["Inventory", "Stock, storage and dead stock risk", "Zero inventory"],
  ["Shipping", "Packing, couriers, returns", "Instant automatic download"],
  ["Automation", "You must be present daily", "Sells while you sleep"],
  ["Scalability", "More sales means more work", "Same file, unlimited sales"],
  ["Risk", "High upfront cost", "Validate before scaling"],
  ["Time Required", "Full-time commitment", "1–2 focused hours a day"],
]

export function ComparisonTable({ headings, rows, className = "", course = false }) {
  const cellClasses = "border-b border-black/5 px-1.75 py-2.5 wrap-anywhere text-sm leading-normal md:px-4.5 md:py-3.25 md:text-base"
  const courseColumn = "w-1/4 text-center md:w-1/5"
  return (
    <div className={`mx-auto max-w-comparison overflow-hidden rounded-inset bg-white shadow-comparison ${className}`}>
      <table className="w-full border-collapse text-left">
        <thead className={course ? "text-gold-ink uppercase" : "bg-gray-100"}>
          <tr>{headings.map((heading, index) => (
            <th scope="col" className={`${cellClasses} ${course ? (index > 0 ? courseColumn : "") : "last:bg-brand"}`} key={heading}>{heading}</th>
          ))}</tr>
        </thead>
        <tbody>
          {rows.map(([label, ...cells]) => (
            <tr className={course ? "even:bg-cream" : ""} key={label}>
              <th scope="row" className={`${cellClasses} ${course ? "font-normal" : "w-1/4 md:w-auto"}`}>{label}</th>
              {cells.map((cell, index) => <td className={`${cellClasses} ${course ? courseColumn : "last:bg-cream last:text-gold-ink"}`} key={index}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function BusinessModel() {
  return (
    <>
      <Section tone="cream">
        <SectionHeading pill label="The Business Model" title="How This Business Actually Works" description="Six simple steps. Once a product is live, the same file can sell while you sleep." />
        <ol className="mx-auto mb-13.5 grid max-w-timeline gap-8">
          {steps.map(([title, description], index) => (
            <li data-reveal="step" className="relative flex min-h-24 gap-6.25 after:absolute after:top-16 after:-bottom-8 after:left-8 after:w-px after:bg-brand-action/45 last:after:hidden" key={title}>
              <div className="grid size-16 shrink-0 place-items-center rounded-inset bg-brand-step shadow-step"><img src={asset(34 + index)} width="28" height="28" alt="" loading="lazy" /></div>
              <div><p className="text-sm font-bold text-gold-ink uppercase">Step {index + 1}</p><h3 className="my-1 font-semibold">{title}</h3><p className="text-muted">{description}</p></div>
            </li>
          ))}
        </ol>
        <ul className="flex flex-wrap justify-center gap-3">{advantages.map((item, index) => <li className="flex items-center justify-center gap-2.5 rounded-full border border-warm-border bg-white px-4 py-1.5 text-sm text-gold-ink md:min-w-50" key={item}><img src={asset(40 + index)} width="18" height="18" alt="" loading="lazy" />{item}</li>)}</ul>
      </Section>
      <Section>
        <SectionHeading pill label="Why This Model" title="Why Digital Products + Etsy" description="Etsy already brings millions of ready-to-buy shoppers. You can make your first sale without ads, followers, or a website." />
        <ComparisonTable headings={["Compare", "Traditional Business", "Digital Product Business"]} rows={businessRows} />
      </Section>
    </>
  )
}
