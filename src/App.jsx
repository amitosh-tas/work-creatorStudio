import { Route, Routes } from "react-router-dom"
import Base from "./components/ui/Base"
import Checkout from "./pages/Checkout"
import Home from "./pages/Home"
import RefundPolicy from "./pages/RefundPolicy"
import ThankYou from "./pages/ThankYou"
import UnlockFreeLesson from "./pages/UnlockFreeLesson"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base/>} >
          <Route index element={<Home />} />
          <Route path="digital-product-in-usa" element={<Home />} />
          <Route path="digital-product-in-usa/unlock-free-lesson" element={<UnlockFreeLesson />} />
          <Route path="digital-product-in-usa/thank-you" element={<ThankYou />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="unlock-free-lesson" element={<UnlockFreeLesson />} />
          <Route path="thank-you" element={<ThankYou />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
