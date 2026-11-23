import { SidebarData } from "@/utils/data"
import { focusOutline, landingContainer } from "../home/shared"

export default function Sidebar() {
  return (
    <header className="bg-black px-4 text-white md:px-6">
      <div className={`${landingContainer} grid grid-cols-2 items-center gap-x-4 gap-y-2 pt-2 pb-3.5 md:flex md:min-h-25.5 md:justify-between md:gap-6 md:py-0`}>
        <a href="#home" className={`justify-self-start ${focusOutline}`}>
          <img className="block h-13.25 w-26.25 object-contain md:h-auto md:w-33.75" src="/assets/logo.webp" alt="Creator Studio, home" width="135" height="67" />
        </a>
        <nav className="col-span-2 row-start-2 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium md:gap-x-6 md:gap-y-2.5 md:text-base" aria-label="Main navigation">
          {SidebarData.map(({ label, path }) => (
            <a className={`${focusOutline} hover:text-brand motion-safe:transition-colors motion-safe:duration-150`} key={label} href={path}>{label}</a>
          ))}
          <button type="button" disabled>Refund Policy</button>
        </nav>
        <button className="justify-self-end rounded-full bg-brand px-4 py-2.25 whitespace-nowrap text-ink md:px-6.25 md:py-3.75" type="button" disabled>Log in</button>
      </div>
    </header>
  )
}
