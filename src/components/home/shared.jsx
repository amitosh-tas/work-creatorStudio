export const landingContainer = "mx-auto w-full max-w-landing"
export const featureSplit = "grid items-start gap-5.5 md:grid-cols-2 md:gap-9"
export const featureTitle = "text-feature-title leading-feature font-bold tracking-heading"
export const focusOutline = "focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus"
export const courseButton = "inline-flex min-h-14.5 min-w-47.5 items-center justify-center border-2 px-5 py-2.5 text-center font-semibold text-ink"
export const goldButton = "relative isolate overflow-hidden rounded-action border-transparent bg-course-action motion-safe:before:pointer-events-none motion-safe:before:absolute motion-safe:before:inset-y-0 motion-safe:before:left-0 motion-safe:before:-z-10 motion-safe:before:w-1/3 motion-safe:before:animate-join-shimmer motion-safe:before:bg-join-shimmer"

const sectionTones = {
  blue: "bg-mist",
  gold: "bg-sand",
  cream: "bg-cream",
}

export function Section({ id, tone, children, className = "", flushBottom = false }) {
  const spacing = flushBottom ? "pt-12.5 lg:pt-17" : "py-12.5 lg:py-17"
  return (
    <section id={id} className={`px-4 md:px-6 ${spacing} ${sectionTones[tone] ?? ""} ${className}`}>
      <div className={landingContainer}>{children}</div>
    </section>
  )
}

export function Pill({ children }) {
  return <p className="mb-5.5 inline-block rounded-full bg-brand px-4 py-1.5 text-sm leading-tight font-semibold text-brand-ink uppercase">{children}</p>
}

export function SectionHeading({ label, title, description, pill = false, align = "center" }) {
  const left = align === "left"
  return (
    <header data-reveal className={left ? "mb-3 text-left" : "mx-auto mb-8 text-center md:mb-12"}>
      {label && (pill ? <Pill>{label}</Pill> : <p className="mb-4.5 text-section-label font-bold text-ocean">{label}</p>)}
      <h2 className={`leading-heading font-bold tracking-heading ${left ? "text-faq-title" : "text-section-title"}`}>{title}</h2>
      {description && <p className={`mx-auto mt-5 max-w-section-copy leading-section-copy ${left ? "text-base" : "text-base text-muted md:text-section-copy"}`}>{description}</p>}
    </header>
  )
}

export function CourseLink({ lesson = false, className = "" }) {
  const variant = lesson ? "rounded-control border-ink bg-transparent" : goldButton
  return (
    <a className={`${courseButton} ${variant} ${focusOutline} hover:brightness-95 motion-safe:transition motion-safe:duration-150 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-97 ${className}`} href={lesson ? "#free-lesson" : "#pricing"}>
      {lesson ? "Unlock Free Lesson" : "Join Now"}
    </a>
  )
}

export function CheckItem({ children, negative = false }) {
  return (
    <li className="flex items-start gap-2 leading-6">
      <span aria-hidden="true" className={`mt-1 flex size-4 shrink-0 items-center justify-center rounded-full text-xs leading-none ${negative ? "bg-red-700 text-white" : "bg-brand text-brand-ink"}`}>
        {negative ? "×" : "✓"}
      </span>
      {children}
    </li>
  )
}

export function Accordion({ items, group }) {
  const faq = group === "faq"
  return (
    <div className="grid gap-2.5">
      {items.map(([title, description], index) => (
        <details className={`group overflow-hidden rounded-control border ${faq ? "border-control-border" : "border-soft-border"}`} key={title} name={group} open={index === 0}>
          <summary className={`flex cursor-pointer list-none items-center justify-between gap-3 p-3.75 font-medium hover:bg-cream ${focusOutline} ${faq ? "" : "bg-neutral-100"}`}>
            {title}
            <span aria-hidden="true" className={`mx-1 size-2.5 shrink-0 rotate-45 border-r-2 border-b-2 group-open:rotate-225 motion-safe:transition-transform motion-safe:duration-200 ${faq ? "text-ocean" : ""}`} />
          </summary>
          <p className="px-3.75 py-3.5 motion-safe:group-open:animate-accordion-answer">{description}</p>
        </details>
      ))}
    </div>
  )
}
