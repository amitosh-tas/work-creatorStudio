import { useEffect } from "react"
import { Outlet, useLocation, useMatch } from "react-router-dom"
import Sidebar, { MobileOffer } from "./Sidebar"
import { Footer } from "../home/Enrollment"

function Base() {
  const isHome = Boolean(useMatch("/"))
  const { hash, key } = useLocation()

  useEffect(() => {
    document.title = isHome
      ? "Creator Studio | Create and Sell Digital Products on Etsy"
      : "Refund Policy | Creator Studio"

    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView()
      } else if (key !== "default") {
        window.scrollTo({ top: 0, behavior: "instant" })
      }
    })

    return () => cancelAnimationFrame(frame)
  }, [hash, isHome, key])

  return (
    <div className={`min-h-dvh bg-canvas font-poppins text-ink ${isHome ? "pb-mobile-page md:pb-0" : ""}`}>
      <Sidebar isHome={isHome} />
      <div>
        <Outlet />
      </div>
      <Footer />
      {isHome && <MobileOffer className="fixed inset-x-0 bottom-0 z-30" />}
    </div>
  )
}

export default Base
