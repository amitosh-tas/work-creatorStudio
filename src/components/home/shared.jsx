export function asset(number, extension = "svg") {
  return `/assets/asset%20${number}.${extension}`
}

export function Section({ id, tone, children, className = "" }) {
  return (
    <section id={id} className={`landing-section ${tone ? `landing-section--${tone}` : ""} ${className}`}>
      <div className="landing-container">{children}</div>
    </section>
  )
}

export function SectionHeading({ label, title, description, pill = false }) {
  return (
    <header className="section-heading">
      {label && <p className={pill ? "section-pill" : "section-label"}>{label}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  )
}

export function CourseLink({ lesson = false }) {
  return (
    <a className={`course-button ${lesson ? "course-button--outline" : ""}`} href={lesson ? "#free-lesson" : "#pricing"}>
      {lesson ? "Unlock Free Lesson" : "Join Now"}
    </a>
  )
}

export function Accordion({ items, group }) {
  return (
    <div className={`accordion accordion--${group}`}>
      {items.map(([title, description], index) => (
        <details key={title} name={group} open={index === 0}>
          <summary>{title}</summary>
          <p>{description}</p>
        </details>
      ))}
    </div>
  )
}
