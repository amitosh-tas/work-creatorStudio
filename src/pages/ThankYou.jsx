import { useEffect } from "react"
import { Link } from "react-router-dom"
import { courseButton, focusOutline, goldButton } from "../components/home/shared"
import { trackPurchase } from "@/utils/metaPixel"

const testPurchaseAmount = 699

export default function ThankYou() {
  useEffect(() => {
    if (window.self !== window.top || window.history.state?.testPurchaseTracked) return
    if (typeof window.fbq !== "function") return

    trackPurchase(testPurchaseAmount)
    window.history.replaceState({ ...window.history.state, testPurchaseTracked: true }, "")
  }, [])

  return (
    <main className="bg-cream px-4 py-16 text-center md:py-24">
      <h1 className="text-3xl font-semibold tracking-heading md:text-4xl">Thank you!</h1>
      <p className="mx-auto mt-4 max-w-xl text-muted">
        This temporary page sends a ₹699 test purchase event when opened.
      </p>
      <Link to="/" className={`mt-8 ${courseButton} ${goldButton} ${focusOutline}`}>
        Back to home
      </Link>
    </main>
  )
}
