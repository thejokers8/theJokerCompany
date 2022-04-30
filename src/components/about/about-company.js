import React from "react";


function AboutCompany() {
  return (
<div className="about-company-container flex flex-col ">
        {" "}
        <h1 className="title-projects text-center font-bold pb-0 mb-5">
          About the company
        </h1>
        <div className="about-company-plan flex">
            <div className="about-mision p-9">
                <h2 className="title text-green-500 mb-3 text-xl font-extrabold uppercase tracking-wider"> Mission</h2>
                <p className="mision text-sm border-r-2 border-gray-900 pr-6">
                    Our mission is to consolidate ourselves as a company that provides effective solutions to the IT area,
                    through software development and engineering. In addition to consolidating a great work team that promotes
                    accurate communication and professional growth in order to guarantee efficient to emerging problems in the sector{" "}
                </p>
            </div>

            <div className="about-vision pt-9 pb-9 pr-9">
                <h2 className="title text-green-500 mb-3 text-xl font-extrabold uppercase tracking-wider "> Vision</h2>
                <p className="vision-text text-sm">
                    Our vision is to consolidate ourselves by the year 2025 as a platform made up of an integrated team of developers and engineers
                    and, in turn, specialized in generating the best technological solutions for any problem related to the ICT sector.
                </p>
            </div>
          </div>
      </div>
  );
}

export default AboutCompany;