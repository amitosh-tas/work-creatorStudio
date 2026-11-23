import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"


function Base() {
  return (
    <div
    className="min-h-dvh font-poppins">
      <Sidebar />

      
      <div
      className="">
        <Outlet />
      </div>

    </div>
  )
}

export default Base