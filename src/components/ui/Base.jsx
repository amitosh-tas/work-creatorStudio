import { useEffect } from "react"
import { Outlet, useLocation, useMatch } from "react-router-dom"
import Sidebar, { MobileOffer } from "./Sidebar"
import { Footer, RazorpayCheckout } from "../home/Enrollment"

function Base() {
  const isHome = Boolean(useMatch("/"))
  const isLesson = Boolean(useMatch("/unlock-free-lesson"))
  const isThankYou = Boolean(useMatch("/thank-you"))
  const { hash, key } = useLocation()

  useEffect(() => {
    if (isHome) {
      document.title = "Creator Studio | Create and Sell Digital Products on Etsy"
    } else if (isThankYou) {
      document.title = "Thank You | Creator Studio"
    } else {
      document.title = isLesson ? "Unlock Free Lesson | Creator Studio" : "Refund Policy | Creator Studio"
    }

    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView()
      } else if (key !== "default") {
        window.scrollTo({ top: 0, behavior: "instant" })
      }
    })

    return () => cancelAnimationFrame(frame)
  }, [hash, isHome, isLesson, isThankYou, key])

  return (
    <div className={`min-h-dvh bg-canvas font-poppins text-ink ${isHome ? "pb-mobile-page md:pb-0" : ""}`}>
      <Sidebar isHome={isHome} />
      <div>
        <Outlet />
      </div>
      <Footer />
      {isHome && <MobileOffer className="fixed inset-x-0 bottom-0 z-30" />}
      <RazorpayCheckout />
    </div>
  )
}

export default Base
