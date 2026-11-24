import { SidebarData } from "@/utils/data"
import { CourseLink, focusOutline, landingContainer } from "../home/shared"

const navLink = `${focusOutline} hover:text-brand motion-safe:transition-colors motion-safe:duration-150`

function NavigationItems({ isHome }) {
  return (
    <>
      {SidebarData.map(({ label, path }) => (
        <a
          className={navLink}
          key={label}
          href={!isHome && path.startsWith("#") ? `/${path}` : path}
          aria-current={!isHome && path === "/refund-policy/" ? "page" : undefined}
        >
          {label}
        </a>
      ))}
    </>
  )
}

export function MobileOffer({ className = "" }) {
  return (
    <aside aria-label="Course offer" className={`min-h-22 border-t border-black/15 bg-canvas px-4 pt-3 pb-mobile-offer text-ink shadow-offer md:hidden ${className}`}>
      <div className="mx-auto grid max-w-hero-stack grid-cols-2 items-center gap-2 sm:gap-4">
        <p className="text-center text-xs sm:text-sm">
          Limited Time Offer
          <strong className="mt-0.5 block text-lg font-bold">₹699</strong>
        </p>
        <CourseLink className="w-full max-w-43 justify-self-center max-md:min-h-12.5 max-md:min-w-0 max-md:px-3 sm:text-lg" />
      </div>
    </aside>
  )
}

export default function Sidebar({ isHome }) {
  return (
    <header className="sticky top-0 z-40 bg-black px-4 text-white md:px-6">
      <div className={`${landingContainer} flex min-h-22 items-center justify-between gap-4 md:min-h-25.5 md:gap-6`}>
        <a href={isHome ? "#home" : "/#home"} className={`shrink-0 ${focusOutline}`}>
          <img className="block h-16 w-36 object-contain md:h-auto md:w-33.75" src="/assets/logo.webp" alt="Creator Studio, home" width="135" height="67" />
        </a>
        <button
          type="button"
          data-mobile-menu-open
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-controls="mobile-menu"
          className={`mr-3 grid size-11 place-items-center text-brand md:hidden ${focusOutline}`}
        >
          <span aria-hidden="true" className="grid gap-0.75">
            <span className="h-0.5 w-4.5 rounded-full bg-current" />
            <span className="h-0.5 w-4.5 rounded-full bg-current" />
            <span className="h-0.5 w-4.5 rounded-full bg-current" />
          </span>
        </button>
        <nav className="hidden flex-wrap justify-center gap-x-6 gap-y-2.5 font-medium md:flex" aria-label="Main navigation">
          <NavigationItems isHome={isHome} />
        </nav>
      </div>

      <dialog id="mobile-menu" aria-label="Mobile menu" className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-black text-white md:hidden">
        <div className="flex min-h-full flex-col">
          <button type="button" data-mobile-menu-close aria-label="Close menu" className={`mt-3 mr-4 grid size-11 place-items-center self-end text-2xl leading-none ${focusOutline}`}>
            <span aria-hidden="true">×</span>
          </button>
          <nav className="flex flex-1 flex-col items-center gap-6 px-4 pt-6 pb-8 text-center text-lg font-semibold" aria-label="Mobile navigation">
            <NavigationItems isHome={isHome} />
          </nav>
          {isHome && <MobileOffer className="sticky bottom-0" />}
        </div>
      </dialog>
    </header>
  )
}
