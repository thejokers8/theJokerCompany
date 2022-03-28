import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 flex flex-col justify-center items-center text-green-600 py-10">
      <div className="w-52 flex justify-between">
        <a
          href="#"
          className="w-10 h-8 flex justify-center items-center"
          target="_blank"
        >
          <i className="ri-facebook-fill text-xl"></i>
        </a>
        <a
          href="#"
          className="w-10 h-8 flex justify-center items-center"
          target="_blank"
        >
          <i className="ri-github-fill text-xl"></i>
        </a>
        <a
          href="#"
          className="w-10 h-8 flex justify-center items-center"
          target="_blank"
        >
          <i className="ri-instagram-fill text-xl"></i>
        </a>
        <a
          href="#"
          className="w-10 h-8 flex justify-center items-center"
          target="_blank"
        >
          <i className="ri-linkedin-fill text-xl"></i>
        </a>
      </div>
      <p className="text-xs">© Copyright 2022 - Design by TheJokerCompany</p>
    </footer>
  );
}

export default Footer;
