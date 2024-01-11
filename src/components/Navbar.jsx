import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'
const Navbar = () => {


  return (
    <div className=" bg-gray-100 fixed top-0 left-0 w-full z-50">

        <div className="flex justify-between items-center px-10 py-5 max-w-screen-2xl mx-auto">
            <div>
                <img className="w-24 h-10 rounded-2xl cursor-pointer" src={logo} alt="" />
            </div>

            <ul className="flex justify-center gap-x-5 font-mono font-bold text-xl text-gray-700">
                <li className=" hover:text-gray-100 duration-500 hover:bg-gray-700 px-2 py-1 rounded-xl">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className=" hover:text-gray-100 duration-500 hover:bg-gray-700 px-2 py-1 rounded-xl">
                <NavLink to="/">Contact</NavLink>
                </li>
                <li className=" hover:text-gray-100 duration-500 hover:bg-gray-700 px-2 py-1 rounded-xl">
                <NavLink to="/cart">Cart</NavLink>
                </li>
            </ul>
        </div>



    </div>
  )
}

export default Navbar