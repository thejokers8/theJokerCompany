import ReactCardFlip from "react-card-flip";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"

function CardFlip({
  href,
  imageAlt,
  imageSrc,
  name,
  description,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onClick={handleClick}
        className="mx-[2em] w-[15rem] h-[18rem] text-center hover:scale-105 hover:text-green-900 hover:rounded-[10%] hover:font-extrabold tracking-wide"
      >
        <a href={href}>
          <div className="w-full h-[90%] aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-title text-[0.9rem] mt-[0.4rem] font-bold">{name}</h3>
        </a>
      </div>
      <div
          className="service-card-turn border-2 border-black flex flex-col w-full text-xs aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 text-center"
        >
          <div className="h-[85%]">
            {description}
          </div>
    
          <div className="flex justify-between mb-5 px-5">
              <button onClick={handleClick}>
              <i 
                className="ri-arrow-go-back-line text-[1rem] font-bold">
              </i>
              </button>
              <button 
                  className="py-[5px] px-[10px] text-[0.8rem] rounded-md bg-green-400 font-bold animate-bounce"
                  title=""
                  ><Link to="/contact">REQUESTED HERE! </Link>
              </button>
          </div>
      </div>
    </ReactCardFlip>
  );
}

export default CardFlip;
