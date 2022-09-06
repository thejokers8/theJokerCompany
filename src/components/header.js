import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

function Header() {
  const { cartItemsAmount } = useContext(Context);
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <div className="header flex justify-around p-6 bg-[#003016] text-gray-100 z-10">
      <div className="text-header text-xl font-bold ">
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
      <nav className={showNavBar ? "block" : "hidden show"}>
        <ul className="flex items-center">
          <li
            onClick={() => setShowNavBar((show) => !show)}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setShowNavBar((show) => !show)}

          >
            <Link to="/about">About</Link>
          </li>
          <li
            onClick={() => setShowNavBar((show) => !show)}
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            onClick={() => setShowNavBar((show) => !show)}
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
