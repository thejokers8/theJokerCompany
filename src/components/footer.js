import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#003016] p-6">
      <div className="flex-footer flex justify-between">
        <div className="footer-image lg:ml-32 ml-10 mt-6 flex justify-center items-center">
          <img 
              src="../../general-images/logo.jpeg"
              className="w-[15vh] h-[10vh]">
          </img>
        </div>
        <div className="nav-footer flex w-[100%] items-center justify-around text-gray-300 text-center">
          <nav style={{display:"block"}}>
            <ul className="flex flex-row ul-footer">
                <li className="mx-2">
                  <Link to="/about">About us</Link>
                </li>
                <li className="mx-2">
                  <Link to="/services">Our Services</Link>
                </li>
                <li className="mx-2">
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
          </nav>
          <div className="footer-icons flex w-[30%] justify-around">
            <a
              href="#"
              className="w-10 h-10 p-2 bg-gray-600 mx-2 rounded-full flex justify-center items-center"
              target="_blank"
            >
              <i className="ri-facebook-fill text-xl"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 p-2 bg-gray-600 mx-2 rounded-full flex justify-center items-center"
              target="_blank"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 p-2 bg-gray-600 mx-2 rounded-full flex justify-center items-center"
              target="_blank"
            >
              <i className="ri-instagram-fill text-xl"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 p-2 bg-gray-600 mx-2 rounded-full flex justify-center items-center"
              target="_blank"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            </div>
          </div>
      </div>
      <p className="text-xs text-center mb-2 mt-5 text-gray-300">© Copyright 2022 - Design by TheJokerCompany</p>
    </footer>
  );
}

export default Footer;
