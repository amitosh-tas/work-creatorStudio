import { trackCheckout } from "@/utils/metaPixel"
import { lessonSourceKey, usaCheckoutUrl, usaPurchaseAmount } from "@/utils/data"
import { LoaderCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useMatch } from "react-router-dom"

export const usaCoursePrice = `$${usaPurchaseAmount.toFixed(2)}`

export const landingContainer = "mx-auto w-full max-w-landing"
export const featureSplit = "grid items-start gap-5.5 md:grid-cols-2 md:gap-9"
export const featureTitle = "text-feature-title leading-feature font-bold tracking-heading"
export const focusOutline = "focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus"
export const courseButton = "inline-flex min-h-14.5 min-w-47.5 items-center justify-center border-2 px-5 py-2.5 text-center font-semibold text-ink"
export const goldButton = "relative isolate overflow-hidden rounded-action border-transparent bg-course-action motion-safe:before:pointer-events-none motion-safe:before:absolute motion-safe:before:inset-y-0 motion-safe:before:left-0 motion-safe:before:-z-10 motion-safe:before:w-1/3 motion-safe:before:animate-join-shimmer motion-safe:before:bg-join-shimmer"

export function LoadingLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2">
      <LoaderCircle aria-hidden="true" className="size-4 motion-safe:animate-spin" />
      {children}
    </span>
  )
}

function waitForCheckout(getResult, signal) {
  return new Promise((resolve) => {
    const deadline = Date.now() + 8000
    function check() {
      const result = !signal.aborted && getResult()
      if (result || signal.aborted || Date.now() >= deadline) {
        resolve(result)
        return
      }
      window.setTimeout(check, 100)
    }
    check()
  })
}

const sectionTones = {
  blue: "bg-mist",
  gold: "bg-sand",
  cream: "bg-cream",
}

export function Section({ id, tone, children, className = "", flushBottom = false }) {
  const spacing = flushBottom ? "pt-6 md:pt-12.5 lg:pt-17" : "py-6 md:py-12.5 lg:py-17"
  return (
    <section id={id} className={`px-4 md:px-6 ${spacing} ${sectionTones[tone] ?? ""} ${className}`}>
      <div className={landingContainer}>{children}</div>
    </section>
  )
}

export function Pill({ children }) {
  return <p className="mb-3 inline-block md:mb-5.5 rounded-full bg-brand px-4 py-1.5 text-sm leading-tight font-semibold text-brand-ink uppercase">{children}</p>
}

export function SectionHeading({ label, title, description, pill = false, align = "center" }) {
  const left = align === "left"
  return (
    <header data-reveal className={left ? "mb-3 text-center md:text-left" : "mx-auto mb-5 text-center md:mb-12"}>
      {label && (pill ? <Pill>{label}</Pill> : <p className="mb-2.5 text-section-label md:mb-4.5 font-bold text-ocean">{label}</p>)}
      <h2 className={`leading-heading font-bold tracking-heading ${left ? "text-faq-title" : "text-section-title"}`}>{title}</h2>
      {description && <p className={`mx-auto mt-3 max-w-section-copy md:mt-5 leading-section-copy ${left ? "text-base" : "text-base text-muted md:text-section-copy"}`}>{description}</p>}
    </header>
  )
}

export function CourseLink({ lesson = false, className = "" }) {
  const usaPage = useMatch("/digital-product-in-usa/*")
  const usaLesson = useMatch("/unlock-free-lesson-usa")
  const coursesPage = useMatch("/course/*")
  const [checkoutMessage, setCheckoutMessage] = useState("")
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const checkoutAttempt = useRef(null)
  const isUsa = Boolean(usaPage || usaLesson)

  useEffect(() => {
    if (lesson) return
    const resetLoading = () => setCheckoutLoading(false)
    if (isUsa) window.addEventListener("pageshow", resetLoading)
    return () => {
      if (isUsa) window.removeEventListener("pageshow", resetLoading)
      checkoutAttempt.current?.abort()
    }
  }, [isUsa, lesson])
  const variant = lesson ? "rounded-control border-ink bg-transparent" : goldButton
  const classes = `${courseButton} ${variant} ${focusOutline} hover:brightness-95 motion-safe:transition motion-safe:duration-150 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-97 ${className}`

  if (lesson) {
    return (
      <button
        type="button"
        className={`cursor-pointer ${classes}`}
        aria-haspopup="dialog"
        aria-controls="free-lesson-dialog"
        onClick={() => {
          try {
            const lessonSource = usaPage?.pathnameBase || coursesPage?.pathnameBase
            if (lessonSource) sessionStorage.setItem(lessonSourceKey, lessonSource)
            else sessionStorage.removeItem(lessonSourceKey)
          } catch {
            // The in-frame redirect still works without browser storage.
          }
          document.getElementById("free-lesson-dialog").showModal()
        }}
      >
        Unlock Free Lesson
      </button>
    )
  }

  if (isUsa) {
    return (
      <a className={classes} href={usaCheckoutUrl} aria-busy={checkoutLoading} onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          trackCheckout()
          return
        }
        if (checkoutLoading) {
          event.preventDefault()
          return
        }
        setCheckoutLoading(true)
        trackCheckout()
      }}>
        {checkoutLoading ? <LoadingLabel>Opening checkout…</LoadingLabel> : "Join Now"}
      </a>
    )
  }

  return (
    <>
      <button
        type="button"
        className={`cursor-pointer ${classes}`}
        aria-haspopup="dialog"
        disabled={checkoutLoading}
        aria-busy={checkoutLoading}
        onClick={async (event) => {
          if (checkoutAttempt.current) return
          const dialog = event.currentTarget.closest("dialog")
          const controller = new AbortController()
          checkoutAttempt.current = controller
          setCheckoutLoading(true)
          setCheckoutMessage("")

          const checkout = document.getElementById("razorpay-checkout")
          const findPaymentButton = () => checkout?.querySelector(".razorpay-payment-button .PaymentButton, button, input[type='submit']")
          try {
            const paymentButton = findPaymentButton() || await waitForCheckout(
              () => checkout?.dataset.loadFailed ? "failed" : findPaymentButton(),
              controller.signal,
            )
            if (controller.signal.aborted) return
            if (!paymentButton || paymentButton === "failed") {
              setCheckoutMessage("Checkout couldn’t load. Please try again.")
              return
            }

            const wasDialogOpen = dialog?.open
            if (wasDialogOpen) dialog.close()
            trackCheckout()
            paymentButton.click()
            const checkoutFrame = await waitForCheckout(
              () => [...document.querySelectorAll("iframe.razorpay-checkout-frame, .razorpay-container iframe")]
                .find((frame) => frame.getClientRects().length && getComputedStyle(frame).visibility === "visible"),
              controller.signal,
            )
            if (controller.signal.aborted) return
            if (!checkoutFrame) {
              if (wasDialogOpen && !dialog.open) dialog.showModal()
              setCheckoutMessage("Checkout didn’t open. Please try again.")
            }
          } finally {
            checkoutAttempt.current = null
            if (!controller.signal.aborted) setCheckoutLoading(false)
          }
        }}
      >
        {checkoutLoading ? <LoadingLabel>Opening checkout…</LoadingLabel> : "Join Now"}
      </button>
      {checkoutMessage && <span role="status" className="block text-sm text-muted">{checkoutMessage}</span>}
    </>
  )
}

export function CheckItem({ children, negative = false }) {
  return (
    <li className="flex items-start gap-2 leading-6">
      <span aria-hidden="true" className={`mt-1 flex size-4 shrink-0 items-center justify-center rounded-full text-xs leading-none ${negative ? "bg-red-700 text-white" : "bg-brand text-brand-ink"}`}>
        {negative ? "×" : "✓"}
      </span>
      {children}
    </li>
  )
}

export function Accordion({ items, group }) {
  const faq = group === "faq"
  return (
    <div className="grid gap-2.5">
      {items.map(([title, description], index) => (
        <details className={`group overflow-hidden rounded-control border ${faq ? "border-control-border" : "border-soft-border"}`} key={title} name={group} open={index === 0}>
          <summary className={`flex cursor-pointer list-none items-center justify-between gap-3 p-3.75 font-medium hover:bg-cream ${focusOutline} ${faq ? "" : "bg-neutral-100"}`}>
            {title}
            <span aria-hidden="true" className={`mx-1 size-2.5 shrink-0 rotate-45 border-r-2 border-b-2 group-open:rotate-225 motion-safe:transition-transform motion-safe:duration-200 ${faq ? "text-ocean" : ""}`} />
          </summary>
          <p className="px-3.75 py-3.5 motion-safe:group-open:animate-accordion-answer">{description}</p>
        </details>
      ))}
    </div>
  )
}
