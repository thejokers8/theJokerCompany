import React from "react";
import { jokerProjects } from "../../projects-data";

function Projects() {
  const card = jokerProjects.map((addProject) => (
    <div
      key={addProject.id}
      className="project flex justify-center relative p-6"
    >
      <div>
        <div className="rounded-lg shadow-lg bg-white overflow-hidden ">
          <img
            className="rounded-t-xl w-screen rounded-b-xl hover:scale-110 transition duration-300 ease-in-out "
            src={addProject.image}
            alt={addProject.name}
          />
          <h4 className="absolute top-7 left-9 tracking-wide text-white opacity-80 uppercase text-xs hover:scale-105 ">
            {addProject.name}
          </h4>
          <p className="absolute bottom-7 right-7">
            <button
              className="animate-pulse px-2 py-2 opacity-80 bg-gray-600 text-white font-small text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseProject${addProject.id}`}
              aria-expanded="false"
              aria-controls="collapseProject${addProject.id"
            >
              Know more
            </button>
          </p>
        </div>
      </div>
    </div>
  ));

  const description = jokerProjects.map((elem) => (
    <div key={elem.id} className="project-description col-start-2 col-span-2 ">
      <div className="collapse" id={`collapseProject${elem.id}`}>
        <div className=" rounded-lg shadow-lg bg-white mb-3">
          {elem.description}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="project-main pb-12 bg-cover bg-[url(https://images.pexels.com/photos/7130548/pexels-photo-7130548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)]">
      <div className="mb-6 py-10 ">
        <h1 className="title-projects mb-10 font-bold text-green-600 w-fit mx-auto">
          Projects
        </h1>
        <p className="text-projects text-base animate-bounce duration-700 w-4/6 text-center mx-auto ">
          Throughout our time as developers we have built some interesting apps
          so feel free to check out below the projects we have already developed
          such as some of the projects we are currently working on.
        </p>
      </div>
      <div className="projects grid lg:grid-cols-3 lg:gap-3 md:grid-cols-3 md:gap-3 mx-5">
        {card}
        {description}
      </div>
    </div>
  );
}

export default Projects;
