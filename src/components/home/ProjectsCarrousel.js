import React from "react";
import { jokerProjects } from "../../projects-data";
import CardFlipProjects from "./cardFlipProjects";
import "../../App.css";

function ProjectsCarrousel() {
  const projects = jokerProjects.map((project) => (
    <>
      <CardFlipProjects project={project} />
    
    </>
  ));

  return (
    <div className="project-main pb-12 mt-10">
      <div className="mb-6 py-10 ">
        <h1 className="title-projects mb-10 font-bold text-green-600 w-fit mx-auto">
          Projects
        </h1>
        <p className="mb-10 mx-10 sm:mx-20 lg:mx-60 text-[1.1rem] sm:text-[1.5rem] text-[rgba(0,0,0,0.8)]">
          Our experience as developers has been summarized in our web portfolio.
          Bellow you'll see some examples of previous designs. Feel free to
          spent time checking out what we did, what we're currently doing and
          some upcoming designs.
        </p>
      </div>
      <div className="flex flex-col items-center overflow-hidden lg:flex-row lg:overflow-x-scroll lg:overflow-y-hidden hide-scroll-bar lg:space-x-4 lg:w-11/12 mx-auto space-y-8 lg:space-y-0">
        {projects}
      </div>
    </div>
  );
}

export default ProjectsCarrousel;
