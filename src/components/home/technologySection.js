import React from "react";
import "tw-elements";

function TechnologySection(){
    return(
        <div className="px-10 sm:px-32 mt-[-2.5em]">
            <h1 className="title-projects font-bold mt-10 mb-10 ">
                Tools, Technologies & Resources Our Software Developer Team
            </h1>
            <p className="mb-20 mx-10 lg:mx-32 text-[1.3rem] text-[rgba(0,0,0,0.8)]">
                JokerCompany was created with the purpose of integrating multiple technologies in the world of programming and developing solutions to engineering problems
            </p>
            <h2 className="uppercase bg-[#00763D] py-[0.5em] px-[1.2em] text-[1.1em] w-[25vh] md:text-[1.5rem] md:w-[30vw] mx-auto rounded-[0.25em] font-[700] text-white text-[1.5rem] tracking-wider">
                Languages
            </h2>
            <div className="flex flex-col md:flex-row bg-[rgba(0,118,61,0.5)] py-12 px-10 justify-around rounded-[0.5em] lg:mx-32 mt-[-1.5em] mb-10">
                <p className="language text-white mb-5 mx-2 text-[1.25rem] shadow-xl py-[0.2em] px-[1em] rounded-[0.5em] bg-[rgba(0, 118, 61, 0)] border-4 border-[rgba(255,255,255,0.5)] hover:scale-110 duration-500">
                    Python
                </p>
                <p className="language text-white mb-5 mx-2 text-[1.25rem] shadow-xl py-[0.2em] px-[1em] rounded-[0.5em] bg-[rgba(0, 118, 61, 0)] border-4 border-[rgba(255,255,255,0.5)] hover:scale-110 duration-500">
                    HTML
                </p>
                <p className="language text-white mb-5 mx-2 text-[1.25rem] shadow-xl py-[0.2em] px-[1em] rounded-[0.5em] bg-[rgba(0, 118, 61, 0)] border-4 border-[rgba(255,255,255,0.5)] hover:scale-110 duration-500">
                    CSS
                </p>
                <p className="language text-white mb-5 mx-2 text-[1.25rem] shadow-xl py-[0.2em] px-[1em] rounded-[0.5em] bg-[rgba(0, 118, 61, 0)] border-4 border-[rgba(255,255,255,0.5)] hover:scale-110 duration-500">
                    JavaScript
                </p>
            </div>
            <h3 className="text-[2rem] text-[rgba(0,118,61,0.5)] font-semibold mb-10">
                FRAMEWORKS & LIBRARIES
            </h3>
            <div className="flex lg:h-[25vh] border-2 border-[#003016] flex-col lg:flex-row justify-around items-center mb-10">
                <div className="web lg:border-r-4 py-10 px-2 lg:w-[40%] border-[#003016]">
                    <p className="text-[2rem] font-bold text-[rgba(0,118,61,0.6)] animate-pulse py-5">
                        Web Development
                    </p>
                </div>
                <div className="web-frameworks flex flex-col lg:flex-row justify-around lg:w-[65%] w-full mx-2 ">
                    <p className="lg:ml-[-3em] mb-5 text-[1.5rem] font-semibold text-[rgba(0,0,0,0.4)]">
                        ReactJs
                    </p>
                    <p className="text-[1.5rem] mb-5 font-semibold text-[rgba(0,0,0,0.4)]">
                        Tailwind
                    </p>
                    <p className="text-[1.5rem] mb-5 font-semibold text-[rgba(0,0,0,0.4)]">
                        Boostrap
                    </p>
                </div>
            </div>

            <div className="flex lg:h-[25vh] border-2 border-[#003016] lg:flex-row flex-col justify-around items-center">
                <div className="ia lg:border-r-4 lg:w-[40%] mx-5 py-10 border-[#003016] flex items-center justify-center ">
                    <p className="text-[2rem] font-bold text-[rgba(0,118,61,0.6)] animate-pulse py-5">
                        Artificial Inteligence
                    </p>
                </div>
                <div className="my-2 lg:w-[65%] flex flex-wrap justify-center items-center">
                    <p className="text-[1.5rem] mx-16 py-5 font-semibold text-[rgba(0,0,0,0.4)]">
                        TensorFlow
                    </p>
                    <p className="text-[1.5rem] mx-16 py-5 font-semibold text-[rgba(0,0,0,0.4)]">
                        Sckitlearn
                    </p>
                    <p className="text-[1.5rem] mx-16 py-5 font-semibold text-[rgba(0,0,0,0.4)]">
                        Pandas
                    </p>
                    <p className="text-[1.5rem] mx-16 py-5 font-semibold text-[rgba(0,0,0,0.4)]">
                        Numpy
                    </p>
                    <p className="text-[1.5rem] mx-16 py-5 font-semibold text-[rgba(0,0,0,0.4)]">
                        Matplitlib
                    </p>
                    <p className="text-[1.5rem] mx-16 py-5 font-semibold text-[rgba(0,0,0,0.4)]">
                        OpenCV
                    </p>
                </div>
            </div>
        </div>

    )
};

export default TechnologySection