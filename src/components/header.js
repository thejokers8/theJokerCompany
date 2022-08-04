import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

function Header() {
  const { cartItemsAmount } = useContext(Context);
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <div className="header flex justify-between items-center p-6 bg-gray-900 text-green-600 z-10">
      <div className="text-header text-xl font-bold">
        <p>
          <Link to="/">TheJokerCompany</Link>
        </p>
        <i
          onClick={() => setShowNavBar((show) => !show)}
          className={
            showNavBar
              ? "toggle ri-close-line hidden cursor-pointer"
              : "toggle ri-menu-line hidden cursor-pointer"
          }
        ></i>
      </div>
      <nav className={showNavBar ? "block" : "hidden sm:block"}>
        <ul className="flex items-center">
          <li
            onClick={() => setShowNavBar((show) => !show)}
            className="links mx-2"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setShowNavBar((show) => !show)}
            className="links mx-2"
          >
            <Link to="/about">About</Link>
          </li>
          <li
            onClick={() => setShowNavBar((show) => !show)}
            className="links mx-2"
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            onClick={() => setShowNavBar((show) => !show)}
            className="links mx-2"
          >
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li onClick={() => setShowNavBar((show) => !show)}>
            <Link to="/cart">
              {cartItemsAmount > 0 ? (
                <i className="ri-shopping-cart-fill ri-fw ri-2x ml-1"></i>
              ) : (
                <i className="ri-shopping-cart-line ri-fw ri-2x ml-1"></i>
              )}
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
