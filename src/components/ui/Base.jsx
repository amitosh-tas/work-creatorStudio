import { useEffect } from "react"
import { Outlet, useLocation, useMatch } from "react-router-dom"
import { Link } from "react-router-dom"
import Sidebar, { MobileOffer } from "./Sidebar"
import { Footer, RazorpayCheckout } from "../home/Enrollment"

function Base() {
  const isRoot = Boolean(useMatch("/"))
  const isUsaLanding = Boolean(useMatch("/digital-product-in-usa"))
  const isUsaLesson = Boolean(useMatch("/digital-product-in-usa/unlock-free-lesson"))
  const isUsa = isUsaLanding || isUsaLesson
  const isCheckout = Boolean(useMatch("/checkout"))
  const isHome = isRoot || isUsaLanding
  const isRootLesson = Boolean(useMatch("/unlock-free-lesson"))
  const isLesson = isRootLesson || isUsaLesson
  const isThankYou = Boolean(useMatch("/thank-you"))
  const { hash, key } = useLocation()

  useEffect(() => {
    if (isCheckout) {
      document.title = "Checkout | Creator Studio"
    } else if (isHome) {
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
  }, [hash, isCheckout, isHome, isLesson, isThankYou, key])

  return (
    <div className={`min-h-dvh bg-canvas font-poppins text-ink ${isHome ? "pb-mobile-page md:pb-0" : ""}`}>
      {isThankYou ? (
        <header className="grid min-h-[78px] place-items-center bg-black">
          <Link to="/" aria-label="Creator Studio home">
            <img src="/assets/logo.webp" alt="Creator Studio" width="132" height="64" />
          </Link>
        </header>
      ) : <Sidebar homePath={isUsa || isCheckout ? "/digital-product-in-usa" : "/"} />}
      <div>
        <Outlet />
      </div>
      <Footer showTagline={isThankYou} />
      {isHome && <MobileOffer className="fixed inset-x-0 bottom-0 z-30" />}
      {!isUsa && !isCheckout && !isThankYou && <RazorpayCheckout />}
    </div>
  )
}

export default Base
