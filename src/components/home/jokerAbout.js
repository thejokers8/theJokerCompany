import React from "react"
import { Link } from "react-router-dom";

function JokerAbout() {
  // const video = useRef(null);
  return (
    <div className="home-about mt-[-2em] relative w-full overflow-hidden bg-[#003016]">
      <div className="joker-about py-24 px-24 flex w-full h-full overflow-hidden items-center justify-around">
        <div className="p-10">
          <img 
            src="../../../general-images/logo.jpeg"
            className="w-full mb-10 mt-10">
          </img>
        </div>
        <div className="flex justify-center items-center h-full w-[80vw] sm:w-[60vw]">
          <div className="text-white text-center px-10 flex flex-col items-center">
            <div className="content mb-[2em] text-[1.5rem] mx-5">
              <h2>TheJokerCompany</h2>
              <h2>TheJokerCompany</h2>
            </div>
            <h5 className="joker text-base mb-6 sm:w-[80%] uppercase tracking-wider">
              The Joker company is a Colombian startup conformed by a team of
              Mechatronical, Biomedical and Mechanical Engineers interested in
              web development, AI and everything related to Information
              technologies (IT). We would be pleased to help you to open digital
              channels of any idea you have in mind.
            </h5>
            <Link
              to="/contact"
              className="button mb-5 sm:mb-10 px-6 py-2.5 text-[0.8rem] text-white sm:font-medium sm:text-[1.2rem] font-semibold leading-tight uppercase rounded-[1em] shadow-md"
            >
              Contact us
            </Link>
            <p className="uppercase font-semibold text-[1rem] sm:text-[1.5rem] mb-10">
              We develop your ideas as never before
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JokerAbout;
