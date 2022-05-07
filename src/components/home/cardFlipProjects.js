import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";

function CardFlipProjects({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleClick} className="w-[450px]">
        <img
          src={project.image}
          alt={project.name}
          className="transition duration-400 hover:scale-110 hover:ease-in mx-auto sm:w-[450px]"
        />
      </div>
      <div
        onClick={handleClick}
        className="sm:h-[300px] sm:w-[450px] w-[320px]"
      >
        <div className="rounded-lg shadow-lg bg-white h-full">
          {project.description}
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default CardFlipProjects;
