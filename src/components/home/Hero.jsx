import { asset } from "../../utils/asset"
import HLSPlayer from "./HLSPlayer"
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
      <span className="col-start-1 row-start-1" aria-hidden="true" suppressHydrationWarning>{number}</span>
    </hero-count>{suffix}</>
  )
}

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-5.5rem-var(--spacing-mobile-page))] flex-col justify-center border-t border-black bg-canvas px-4.5 pt-2.5 pb-6 text-black sm:px-6 md:min-h-[calc(100dvh-6.375rem)] md:pt-11 md:pb-16 lg:py-16" id="home">
      <img className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full w-full object-cover object-top" src="/assets/heroBg.webp" alt="" />
      <div className="mx-auto grid w-full max-w-hero-stack items-center gap-8 lg:flex lg:max-w-hero xl:gap-12 2xl:gap-28">
        <div className="min-w-0 text-center md:text-left lg:flex-117">
          <p className="flex items-center justify-center gap-2 rounded-full border-2 border-warm-border px-3 py-0.75 text-xs text-gold-ink sm:gap-4 sm:text-sm md:inline-flex md:justify-start md:pr-1.25 md:pl-4 lg:ml-1.5">
            <img className="shrink-0" src={asset(1)} width="22" height="22" alt="" />
            Beginner-friendly AI + Etsy system
          </p>
          <h1 className="mt-2.25 text-3xl leading-display font-semibold tracking-heading max-md:text-balance md:text-hero-title">
            Create &amp; Sell Digital<br className="hidden 2xl:inline" /> Products on Etsy Using AI
            <span className="block text-brand">Even If You're Starting<br className="hidden 2xl:inline" /> From Zero</span>
          </h1>
          <p className="mx-auto mt-5 max-w-157.5 text-base leading-compact text-slate-copy md:mx-0 md:mt-2.5">
            Learn the complete step-by-step system to create profitable digital products
            using AI and Canva, sell them on Etsy, and build an online business without
            inventory, shipping, or coding.
          </p>
          <div className="mt-7.5 hidden flex-wrap gap-x-4 gap-y-3 md:flex lg:ml-1.5 xl:gap-x-8">
            <CourseLink className="min-w-51.5" />
            <CourseLink lesson />
          </div>
        </div>
        <div className="relative min-w-0 lg:max-w-144.75 lg:flex-100">
          <HLSPlayer
            src="https://content.apisystem.tech/hls/medias/vjZH6eaaO1YqAx3rpmKk/media/transcoded_videos/cts-a31c99b6633f71d9_,360,480,720,1080,p.mp4.urlset/master.m3u8"
            poster="/assets/hero-poster-768.webp"
            posterSet="/assets/hero-poster-480.webp 480w, /assets/hero-poster-768.webp 768w"
            posterSizes="(min-width: 1024px) min(45vw, 579px), (min-width: 640px) min(calc(100vw - 48px), 650px), calc(100vw - 36px)"
          />
          <div className="pointer-events-none absolute right-3 bottom-3 z-20 hidden justify-items-center gap-0.75 rounded-sm bg-black px-3 py-2 text-sm text-white peer-data-playing:hidden md:grid lg:top-11/24 lg:right-auto lg:bottom-auto lg:-left-6 xl:-left-10 2xl:-left-25">
            <strong className="text-base text-brand sm:text-2xl"><CountUp value={1500} /></strong>
            <span>Digital Sales Generated</span>
          </div>
        </div>
        <div className="flex justify-center md:hidden">
          <CourseLink lesson className="min-w-55 px-5 max-md:min-h-12.5" />
        </div>
      </div>
      <dl className="mx-auto mt-7 grid w-full max-w-hero-stack grid-cols-2 gap-x-3 gap-y-5 rounded-action bg-canvas px-3 py-6 text-center shadow-stat-strip md:mt-10 md:py-5 lg:mt-12 lg:max-w-stat-strip lg:grid-cols-4 lg:px-10 lg:pt-7 lg:pb-4.5">
        {stats.map(([value, label, prefix, suffix]) => (
          <div className="flex flex-col-reverse justify-end gap-1.25" key={label}>
            <dt className="text-sm text-slate-copy uppercase">{label}</dt>
            <dd className="text-stat font-bold tracking-tight max-md:text-[1.75rem]">{typeof value === "number" ? <CountUp {...{ value, prefix, suffix }} /> : value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
