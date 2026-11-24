import { Route, Routes } from "react-router-dom"
import Base from "./components/ui/Base"
import Home from "./pages/Home"
import RefundPolicy from "./pages/RefundPolicy"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base/>} >
          <Route index element={<Home />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
