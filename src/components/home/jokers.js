import React, {useState} from "react";
import {description} from "../../jokers-data";
import JokersCards from "./jokersCards";

function Jokers(){

    const [joker, setChangeJoker] = useState([description[0]]);
    const [changeMemberCard, setChangeMemberCard] = useState(1);

    function prevMember() {
        changeMemberCard > 1
        ? setChangeMemberCard(changeMemberCard - 1)
        : setChangeMemberCard(description.length);
    }

    function nextMember() {
        changeMemberCard <= description.length - 1
        ? setChangeMemberCard(changeMemberCard + 1)
         : setChangeMemberCard(1);
         }

    const jokersRender = description.map(joker => {return(
        <div className="w-[50vw] lg:w-[15vw]">
            <img
                src={joker.jokerCard}
                className="opacity-80 mx-auto hover:scale-105 duration-500">
            </img>
            <img 
                src={joker.image}
                className="absolute opacity-90 w-[20vw] h-[20vw] lg:w-[8vw] lg:h-[8vw] border-2 border-[rgba(0,0,0,0.4)] rounded-full mt-[-35%] lg:mt-[-15.5%] ml-[14.5%] lg:ml-[3.5%]">
            </img>
            <h3 className="flex justify-center items-center text-[1rem] font-semibold text-[rgba(0,0,0,0.6)] mb-10">
                <span className="text-[2rem] font-bold mr-2">{joker.jokerId}</span> {joker.jokerName}
            </h3>
           
        </div>
    )})
    
    return(
        <div className="px-10 bg-[rgba(176,176,176,0.08)] pt-5 pb-20">
             <h1 className="title-projects font-bold mt-10 mb-10 ">
                Joker's Members
            </h1>
            <div className="joker-little">
                <div className="flex items-center justify-center">
                    <button onClick={prevMember} className="prev-joker h-[20%] animate-pulse text-[3rem] mt-[-10%]">
                        {" "}
                    <i className="ri-arrow-left-s-line"></i>{" "}
                    </button>
                    <JokersCards 
                        jokerCard={joker[0]}
                        setMemberCard={setChangeJoker}
                        changeMemberCard={changeMemberCard}
                    />
                    <button onClick={nextMember} className="next-joker h-[20%] animate-pulse text-[3rem] mt-[-10%]">
                        {" "}
                        <i className="ri-arrow-right-s-line"></i>{" "}
                    </button>
                </div>
            </div>
            <div className="joker-large">
                <div className="flex justify-around">
                    {jokersRender}
                </div>
            </div>
        </div>
    )
};

export default Jokers;