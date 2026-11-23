import { asset, Section, SectionHeading } from "./shared"

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

export function ComparisonTable({ headings, rows, className = "" }) {
  return (
    <div className={`comparison-table ${className}`}>
      <table>
        <thead><tr>{headings.map(heading => <th scope="col" key={heading}>{heading}</th>)}</tr></thead>
        <tbody>
          {rows.map(([label, ...cells]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              {cells.map((cell, index) => <td key={index}>{cell}</td>)}
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
        <ol className="business-steps">
          {steps.map(([title, description], index) => (
            <li key={title}>
              <div className="step-icon"><img src={asset(34 + index)} width="28" height="28" alt="" loading="lazy" /></div>
              <div><p className="step-number">Step {index + 1}</p><h3>{title}</h3><p>{description}</p></div>
            </li>
          ))}
        </ol>
        <ul className="advantages">{advantages.map((item, index) => <li key={item}><img src={asset(40 + index)} width="18" height="18" alt="" loading="lazy" />{item}</li>)}</ul>
      </Section>
      <Section>
        <SectionHeading pill label="Why This Model" title="Why Digital Products + Etsy" description="Etsy already brings millions of ready-to-buy shoppers. You can make your first sale without ads, followers, or a website." />
        <ComparisonTable className="comparison-table--business" headings={["Compare", "Traditional Business", "Digital Product Business"]} rows={businessRows} />
      </Section>
    </>
  )
}
