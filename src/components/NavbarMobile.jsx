import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/Context";

export default function NavbarMobile() {
  const { toggleNavbar } = useContext(ShopContext);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <button
        className="absolute top-5 right-5 text-2xl"
        onClick={toggleNavbar}
      >
        &times;
      </button>
      <ul className="text-center space-y-5 text-lg font-semibold">
        <li>
          <NavLink to="/" onClick={toggleNavbar}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={toggleNavbar}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" onClick={toggleNavbar}>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" onClick={toggleNavbar}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
