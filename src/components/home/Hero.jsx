import { asset } from "../../utils/asset"
import { CourseLink } from "./shared"

const stats = [
  [1500, "Etsy sales"],
  [50, "Revenue generated", "$", "K+"],
  [3, "Years experience"],
  ["AI Powered", "Workflow"],
]

function CountUp({ value, prefix = "", suffix = "+" }) {
  const number = value.toLocaleString("en-US")
  return (
    <>{prefix}<hero-count className="inline-grid text-center tabular-nums" data-value={value}>
      <span className="col-start-1 row-start-1 opacity-0">{number}</span>
      <span className="col-start-1 row-start-1" aria-hidden="true">{number}</span>
    </hero-count>{suffix}</>
  )
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-dvh border-t border-black bg-canvas px-4.5 pt-11 pb-16 text-black sm:px-6 lg:min-h-214 lg:pt-17.5 lg:pb-29.5" id="home">
      <img className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full w-full object-cover object-top lg:h-19/20 lg:object-cover" src="/assets/heroBg.webp" alt="" />
      <div className="mx-auto grid max-w-hero-stack items-center gap-8 lg:flex lg:max-w-hero lg:gap-16 xl:gap-24 2xl:gap-29">
        <div className="min-w-0 lg:flex-117">
          <p className="inline-flex items-center gap-4 rounded-full border-2 border-warm-border py-0.75 pr-1.25 pl-4 text-sm text-gold-ink lg:ml-1.5">
            <img src={asset(1)} width="22" height="22" alt="" />
            Beginner-friendly AI + Etsy system
          </p>
          <h1 className="mt-2.25 text-hero-title leading-display font-semibold tracking-heading">
            Create &amp; Sell Digital<br className="hidden 2xl:inline" /> Products on Etsy Using AI
            <span className="block text-brand">Even If You're Starting<br className="hidden 2xl:inline" /> From Zero</span>
          </h1>
          <p className="mt-2.5 max-w-157.5 leading-compact text-slate-copy">
            Learn the complete step-by-step system to create profitable digital products
            using AI and Canva, sell them on Etsy, and build an online business without
            inventory, shipping, or coding.
          </p>
          <div className="mt-7.5 grid flex-wrap gap-x-10 gap-y-3 sm:flex lg:ml-1.5">
            <CourseLink className="min-w-51.5" />
            <CourseLink lesson />
          </div>
        </div>
        <div className="relative min-w-0 lg:max-w-144.75 lg:flex-100">
          <div className="relative aspect-video bg-neutral-900" role="img" aria-label="Course introduction video placeholder">
            <img
              className="block h-auto w-full"
              src="/assets/hero-poster-768.webp"
              srcSet="/assets/hero-poster-480.webp 480w, /assets/hero-poster-768.webp 768w"
              sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 900px) 650px, (max-width: 1400px) 42vw, 579px"
              alt=""
              width="768"
              height="432"
              fetchPriority="high"
            />
            <span className="absolute top-1/2 left-1/2 grid h-11.5 w-16.5 -translate-1/2 place-items-center rounded-control bg-black/55 after:border-y-8 after:border-l-14 after:border-y-transparent after:border-l-white" aria-hidden="true" />
          </div>
          <div className="absolute right-3 bottom-3 grid justify-items-center gap-0.75 rounded-sm bg-black px-2 py-1 text-xs text-white sm:px-3.25 sm:pt-1.5 sm:pb-2.75 sm:text-sm lg:top-11/24 lg:right-auto lg:bottom-auto lg:-left-25">
            <strong className="text-base text-brand sm:text-2xl"><CountUp value={1500} /></strong>
            <span>Digital Sales Generated</span>
          </div>
        </div>
      </div>
      <dl className="mx-auto mt-10 grid max-w-hero-stack grid-cols-2 gap-x-3 gap-y-5 rounded-action bg-canvas px-3 py-5 text-center shadow-stat-strip lg:mt-19.5 lg:max-w-stat-strip lg:grid-cols-4 lg:px-10 lg:pt-7 lg:pb-4.5">
        {stats.map(([value, label, prefix, suffix]) => (
          <div className="flex flex-col-reverse justify-end gap-1.25" key={label}>
            <dt className="text-sm text-slate-copy uppercase">{label}</dt>
            <dd className="text-stat font-bold tracking-tight">{typeof value === "number" ? <CountUp {...{ value, prefix, suffix }} /> : value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
