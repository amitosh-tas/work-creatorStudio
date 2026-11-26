import { useEffect } from "react"
import { Link } from "react-router-dom"
import { courseButton, focusOutline, goldButton } from "../components/home/shared"
import { trackPurchase } from "@/utils/metaPixel"

const testPurchaseAmount = 699

export default function ThankYou() {
  useEffect(() => {
    if (window.self !== window.top || window.history.state?.testPurchaseTracked) return
    if (typeof window.fbq !== "function") return

    const paymentId = new URLSearchParams(window.location.search).get("razorpay_payment_id")
    trackPurchase(testPurchaseAmount, paymentId)
    window.history.replaceState({ ...window.history.state, testPurchaseTracked: true }, "")
  }, [])

  return (
    <main className="bg-cream px-4 py-16 text-center md:py-24">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-semibold tracking-heading md:text-4xl">Thank You! 🎉</h1>
        <p className="mt-4 text-xl font-semibold">Your Course Access Is Ready!</p>
        <p className="mt-3 text-muted">Thank you for your purchase. We’re excited to have you onboard!</p>
        <p className="mt-3 text-muted">We have sent your Course Login Details to your registered email address.</p>

        <section className="mt-8 rounded-lg border border-warm-border bg-white p-5 text-left sm:p-6">
          <h2 className="text-xl font-semibold">What’s Next?</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
            <li>Open your registered email inbox.</li>
            <li>Check your login details and course access link.</li>
            <li>Log in and start learning!</li>
          </ol>
          <h2 className="mt-6 text-xl font-semibold">Didn’t receive the email?</h2>
          <p className="mt-3 text-muted">Please check your Spam, Promotions, or Junk folder.</p>
          <p className="mt-3 text-muted">If you still can’t find your login details, please contact our support team.</p>
        </section>
        <p className="mt-6 font-semibold">Happy Learning!</p>
      </div>
      <Link to="/" className={`mt-8 ${courseButton} ${goldButton} ${focusOutline}`}>
        Back to home
      </Link>
    </main>
  )
}
