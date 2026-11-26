import { courseButton, focusOutline, goldButton, usaCoursePrice } from "../components/home/shared"

const hostedCheckout = import.meta.env.VITE_USA_CHECKOUT_URL ||
  "https://sites.leadconnectorhq.com/preview/HgusVdvGPAXb0Vbu06Xl?notrack=true"

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
          <table className="mt-4 w-full text-sm">
            <thead>
              <tr className="border-b border-warm-border">
                <th scope="col" className="py-2 pr-2 text-left">Item</th>
                <th scope="col" className="py-2 text-center">Quantity</th>
                <th scope="col" className="py-2 pl-2 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-warm-border">
                <td className="py-3 pr-2">Digital Product Mastery</td>
                <td className="py-3 text-center">1</td>
                <td className="py-3 pl-2 text-right">{usaCoursePrice}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="font-semibold">
                <th scope="row" colSpan={2} className="py-3 text-left">Order total</th>
                <td className="py-3 pl-2 text-right">{usaCoursePrice} USD</td>
              </tr>
            </tfoot>
          </table>
          <a href={hostedCheckout} className={`mt-4 w-full ${courseButton} ${goldButton} ${focusOutline}`}>
            Continue to secure payment
          </a>
        </section>
      </div>
    </main>
  )
}
