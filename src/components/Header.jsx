import { NavLink } from "react-router-dom";


export function Header() {

  return (
    <nav className=" bg-slate-800 text-white flex justify-center content-center p-4 text-2xl fixed top-0 w-full">
      <NavLink to="/">Home</NavLink>
    </nav>
  )
}
