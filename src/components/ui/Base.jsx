import { Outlet } from "react-router-dom"
import Sidebar, { MobileOffer } from "./Sidebar"

function Base() {
  return (
    <div className="min-h-dvh bg-canvas pb-mobile-page font-poppins text-ink md:pb-0">
      <Sidebar />
      <div>
        <Outlet />
      </div>
      <MobileOffer className="fixed inset-x-0 bottom-0 z-30" />
    </div>
  )
}

export default Base
