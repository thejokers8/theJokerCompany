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
        <img
          src={project.image}
          alt={project.name}
          className="project-image rounded-3xl transition duration-400 hover:rounded-3xl hover:scale-105 hover:ease-in mx-auto sm:w-[400px] cursor-pointer"
        />
        <h2 className="title-project animate-pulse">{project.name}</h2>
      </div>
     
      <div
        className="sm:h-[220px] sm:w-[400px] w-[290px]"
      >
        <div className="rounded-3xl shadow-lg bg-white h-full flex flex-col justify-items-center px-[4%] py-[10%]">
          <p className="text-[0.75rem]">{project.description}</p>
          <div className="flex space-x-24">
            <Platforms platform={project.platforms} date={project.date}/>
          </div>
          <button onClick={handleReturn} className="absolute bottom-[5%] right-[20%]">
            <i 
              className="ri-arrow-go-back-line">
            </i>
          </button>
          <a
            className="animate-pulse text-[0.75rem] inline-block p-[0.2em] rounded-lg text-black absolute bottom-[7%] left-[10%] cursor-pointer bg-green-200"
            target="_blank"
            href={project.repo}
          > 
          Check code source
          </a>
          <a
            className="animate-pulse text-[0.75rem] inline-block p-[0.2em] rounded-lg text-black absolute bottom-[20%] left-[10%] cursor-pointer bg-green-200"
            target="_blank"
            href={project.previa}
          > 
          Check out app
          </a>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default CardFlipProjects;
