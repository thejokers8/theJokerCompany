import React, { useEffect } from "react";
import { description } from "../../jokers-data";

function JokersCards({ jokerCard, setMemberCard, changeMemberCard }) {

  useEffect(() => {
    setMemberCard(
      description.filter((element) => element.id === changeMemberCard)
    );
  }, [changeMemberCard]);

  return (
    <>
      <div className="text-center">
        <img
            src={jokerCard.jokerCard}
            className="opacity-75 mx-auto w-[70%] hover:scale-105 duration-500">
        </img>
        <img 
            src={jokerCard.image}
            className="joker-card-photo absolute opacity-90 sm:w-[17vh] sm:h-[17vh] border-2 border-[rgba(0,0,0,0.4)] rounded-full mx-[20vh] my[-35vh] sm:mx-[18vh] md:mx-[20.5vw] sm:my-[-33vh]">
        </img>
        <h3 className="mt-5 flex justify-center items-center text-[1.1rem] font-semibold text-[rgba(0,0,0,0.6)] mb-10">
            <span className="text-[2rem] font-bold mr-3 mb-1">{jokerCard.jokerId}</span> {jokerCard.jokerName}
        </h3>
      </div>
     
    </>
  );
}

export default JokersCards;