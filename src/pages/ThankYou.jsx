import { useEffect } from "react"
import HLSPlayer from "../components/home/HLSPlayer"
import { trackPurchase } from "@/utils/metaPixel"

const testPurchaseAmount = 699
const welcomeVideo = "https://content.apisystem.tech/hls/medias/vjZH6eaaO1YqAx3rpmKk/media/transcoded_videos/cts-9d13f67941ab4045_,360,480,720,1080,p.mp4.urlset/master.m3u8"
const communityInvite = "https://chat.whatsapp.com/Gg5qmBOQoMJ4JCxyIDr6hj?mode=gi_t"

export default function ThankYou() {
  useEffect(() => {
    if (window.self !== window.top || window.history.state?.testPurchaseTracked) return
    if (typeof window.fbq !== "function") return

    const paymentId = new URLSearchParams(window.location.search).get("razorpay_payment_id")
    trackPurchase(testPurchaseAmount, paymentId)
    window.history.replaceState({ ...window.history.state, testPurchaseTracked: true }, "")
  }, [])

  return (
    <main className="bg-[#fff0d8] bg-[radial-gradient(ellipse_at_12%_16%,#ffe2a0,transparent_42%),radial-gradient(ellipse_at_48%_65%,#fff9e9,transparent_55%),radial-gradient(ellipse_at_80%_10%,#fff8ee,transparent_42%),linear-gradient(125deg,#fff4e2,#ffebaf_64%,#ffe6d7)] px-5 py-14 text-center text-black md:px-8 md:py-24 lg:pt-28 lg:pb-32">
      <div className="mx-auto max-w-[85rem]">
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] leading-tight font-semibold tracking-heading">Thank You for Your Purchase!</h1>

        <div className="mt-8 grid items-center gap-7 lg:grid-cols-2 lg:gap-6">
          <HLSPlayer src={welcomeVideo} label="Welcome to Digital Product Mastery" autoplay />
          <div className="space-y-5 leading-7">
            <h2 className="text-xl font-medium">
              Welcome to the <strong className="text-[#a95714]">Digital Product Mastery</strong> Course.
            </h2>
            <p>
              Congratulations on taking the next step in your learning journey. Your enrollment has been confirmed, and you can now access your course materials using the link provided in your email. We look forward to helping you achieve your goals and make the most of your learning experience.
            </p>
            <p className="lg:pt-3">
              Can’t find the email? Please check your Spam, Junk, Promotions, or Updates folder. If you need assistance, contact us at{" "}
              <a className="break-all text-blue-700 underline" href="mailto:99creatorstudio@gmail.com">99creatorstudio@gmail.com</a>,
              {" "}and we’ll be happy to help.
            </p>
          </div>
        </div>

        <section className="mx-auto mt-12 max-w-[54rem] leading-7 lg:mt-20">
          <h2 className="text-xl font-bold">You’re now part of the Creator Studio community.</h2>
          <p className="mt-1">
            Join our private WhatsApp community to connect with fellow students, receive course updates, ask questions, and get exclusive AI &amp; Etsy insights.
          </p>
          <a className="text-blue-700 underline" href={communityInvite}>Join the WhatsApp community</a>
          <p className="italic">Exclusive access for enrolled students only.</p>
        </section>
      </div>
    </main>
  )
}
