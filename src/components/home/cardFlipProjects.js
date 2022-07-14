import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import Platforms from "../../components/home/platformsProjects"

function CardFlipProjects({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleReturn = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped)
  }


  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleClick} className="w-[450px] p-[1em]">
        <div className="name-container w-[100%] text-left mb-[-2.5em] pl-5">
          <h2 className="title-project text-left animate-pulse">{project.name}</h2>
        </div>
        <img
          src={project.image}
          alt={project.name}
          className="project-image rounded-3xl transition duration-400 hover:rounded-3xl hover:scale-105 hover:ease-in mx-auto sm:w-[400px] cursor-pointer"
        />
      </div>
     
      <div
        className="sm:h-[220px] sm:w-[400px] w-[290px]"
      >
        <div className="rounded-3xl shadow-lg bg-white h-full flex flex-col px-[4%] py-[10%]">
          <p className="text-[0.75rem]">{project.description}</p>
          <div className="flex space-x-24">
            <Platforms platform={project.platforms} date={project.date}/>
          </div>
          
          <div className="flex w-[100%] justify-between px-10 mt-[-1.5em]">

            <div className="flex flex-col">
              <a
                className="animate-pulse text-[0.75rem] inline-block p-[0.2em] rounded-lg text-black cursor-pointer bg-green-200 mb-2"
                target="_blank"
                href={project.repo}
              > 
              Check code source
              </a>
              <a
                className="animate-pulse text-[0.75rem] inline-block p-[0.2em] rounded-lg text-black cursor-pointer bg-green-200"
                target="_blank"
                href={project.previa}
              > 
              Check out app
              </a>
            </div>
            <button onClick={handleReturn}>
              <i 
                className="ri-arrow-go-back-line">
              </i>
            </button>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default CardFlipProjects;
