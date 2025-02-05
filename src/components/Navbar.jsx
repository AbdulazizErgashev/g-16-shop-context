import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/Context";
import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {
  const { navigate } = useContext(ShopContext);

  return (
    <main className="shadow-md bg-white">
      <nav className="flex items-center justify-between max-w-screen-lg mx-auto py-5 px-5 md:px-0 text-green-700">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl font-sans font-bold"
        >
          Logo
        </div>
        <ul className="hidden md:flex items-center gap-x-10 text-base font-semibold uppercase tracking-widest">
          <li className="flex items-center gap-x-2">
            <FaHome />
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="flex items-center gap-x-2">
            <FaShop />
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="flex items-center gap-x-2">
            <MdOutlineShoppingCart />
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
}
