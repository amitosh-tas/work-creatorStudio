import { asset, CourseLink } from "./shared"

const stats = [
  [1500, "Etsy sales"],
  [50, "Revenue generated", "$", "K+"],
  [3, "Years experience"],
  ["AI Powered", "Workflow"],
]

function CountUp({ value, prefix = "", suffix = "+" }) {
  const number = value.toLocaleString("en-US")
  return (
    <>{prefix}<hero-count data-value={value}>
      <span className="hero-count__size">{number}</span>
      <span aria-hidden="true">{number}</span>
    </hero-count>{suffix}</>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <img src={asset(1)} width="22" height="22" alt="" />
            Beginner-friendly AI + Etsy system
          </p>
          <h1>
            Create &amp; Sell Digital<br className="hero__desktop-break" /> Products on Etsy Using AI
            <span>Even If You're Starting<br className="hero__desktop-break" /> From Zero</span>
          </h1>
          <p className="hero__description">
            Learn the complete step-by-step system to create profitable digital products
            using AI and Canva, sell them on Etsy, and build an online business without
            inventory, shipping, or coding.
          </p>
          <div className="hero__actions">
            <CourseLink />
            <CourseLink lesson />
          </div>
        </div>
        <div className="hero__media">
          <div className="hero__video" role="img" aria-label="Course introduction video placeholder">
            <img
              src="/assets/hero-poster-768.webp"
              srcSet="/assets/hero-poster-480.webp 480w, /assets/hero-poster-768.webp 768w"
              sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 900px) 650px, (max-width: 1400px) 42vw, 579px"
              alt=""
              width="768"
              height="432"
              fetchPriority="high"
            />
            <span className="hero__play" aria-hidden="true" />
          </div>
          <div className="hero__sales">
            <strong><CountUp value={1500} /></strong>
            <span>Digital Sales Generated</span>
          </div>
        </div>
      </div>
      <dl className="hero__stats">
        {stats.map(([value, label, prefix, suffix]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{typeof value === "number" ? <CountUp {...{ value, prefix, suffix }} /> : value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
