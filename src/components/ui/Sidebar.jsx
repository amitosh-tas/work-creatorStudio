import { SidebarData } from "@/utils/data"

export default function Sidebar() {
  return (
    <header className="site-header">
      <div className="landing-container site-header__inner">
        <a href="#home">
          <img src="/assets/logo.webp" alt="Creator Studio, home" width="135" height="67" />
        </a>
        <nav aria-label="Main navigation">
          {SidebarData.map(({ label, path }) => (
            <a key={label} href={path}>{label}</a>
          ))}
          <button type="button" disabled>Refund Policy</button>
        </nav>
        <button className="site-header__login" type="button" disabled>Log in</button>
      </div>
    </header>
  )
}
