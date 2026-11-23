import { NavLink } from "react-router-dom"
import { SidebarData } from "@/utils/data"





function Sidebar() {
  return (
    <div
    className="bg-black font-semibold">
      <div
      className="mainCont h-25.5 p-4 flex items-center justify-between">

        <img 
        src="/assets/logo.webp" 
        alt="logo" />

        <div
        className="flex gap-2.5 text-white">
        {
          SidebarData.map( ({label, path}, i) =>(
            <NavLink 
            key={i}
            to={path} >
              {label}
            </NavLink>
          ))
        }
        </div>

        <button
        className="bg-amber-300 px-5 py-3 rounded-full">
          Log in
        </button>

      </div>
    </div>
  )
}

export default Sidebar