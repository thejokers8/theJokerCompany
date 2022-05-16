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
    <div className="project-main pb-12 bg-cover bg-gradient-to-b from-indigo-100 to-indigo-900">
      <div className="mb-6 py-10 ">
        <h1 className="title-projects mb-4 font-bold text-green-600 w-fit mx-auto">
          Projects
        </h1>
        <p className="text-projects text-base animate-bounce duration-700 w-4/6 text-center mx-auto ">
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
