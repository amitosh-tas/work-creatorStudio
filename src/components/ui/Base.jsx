import { Outlet, useMatch } from "react-router-dom"
import Sidebar, { MobileOffer } from "./Sidebar"
import { Footer } from "../home/Enrollment"

function Base() {
  const isHome = Boolean(useMatch("/"))

  return (
    <div className={`min-h-dvh bg-canvas font-poppins text-ink ${isHome ? "pb-mobile-page md:pb-0" : ""}`}>
      <Sidebar isHome={isHome} />
      <div>
        <Outlet />
      </div>
      <Footer homeHref={isHome ? "#home" : "/#home"} />
      {isHome && <MobileOffer className="fixed inset-x-0 bottom-0 z-30" />}
    </div>
  )
}

export default Base
