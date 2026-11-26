import { courseButton, focusOutline, goldButton, usaCoursePrice } from "../components/home/shared"
import { usaCheckoutUrl } from "@/utils/data"

export default function Checkout() {
  return (
    <main className="bg-white px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto max-w-235">
        <h1 className="text-3xl font-semibold tracking-heading">Ready to Turn Your Ideas Into Digital Products?</h1>
        <p className="mt-4 text-muted">
          Join the course and learn how to create, launch, and grow a digital product business using beginner-friendly tools like Canva and AI.
        </p>
        <section aria-labelledby="order-summary" className="mt-8 rounded-lg border border-warm-border p-5 sm:p-6">
          <h2 id="order-summary" className="text-xl font-semibold">Order summary</h2>
          <dl className="mt-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-warm-border pb-4">
            <dt>Digital Product Mastery</dt>
            <dd className="font-semibold">{usaCoursePrice} USD</dd>
          </dl>
          <a href={usaCheckoutUrl} className={`mt-4 w-full ${courseButton} ${goldButton} ${focusOutline}`}>
            Continue to secure payment
          </a>
        </section>
      </div>
    </main>
  )
}
