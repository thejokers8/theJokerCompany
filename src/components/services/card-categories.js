import React, { useContext, useState } from "react";
import { Context } from "../../context";
import CardFlip from "./cardFlip";

function CardServices({
    id,
    name,
    description,
    image,
})

{
  const { allServices } = useContext(Context);

  const [subcategories, setSubcategories] = useState([])

  const [appear, setAppear] = useState(false)

  const show = {
    display: "block"
  }

  const hide = {
    display: "none"
  }

  function handleShow(id) {
    setAppear(prev => !prev)
    showSubcategorie(id)
  }

  function showSubcategorie(id) {
    return(
        <div className="flex flex-col justify-between items-center overflow-hidden lg:flex-row lg:overflow-x-scroll lg:overflow-y-hidden hide-scroll-bar lg:space-x-4 lg:w-11/12 mx-auto space-y-8 lg:space-y-0">
            {allServices.map(subcategorie => 
                {if (id === subcategorie.category)
                    return(
                    <CardFlip
                        id={subcategorie.id}
                        amount={subcategorie.amount}
                        key={subcategorie.id}
                        href={subcategorie.href}
                        imageAlt={subcategorie.imageAlt}
                        imageSrc={subcategorie.imageSrc}
                        name={subcategorie.name}
                        price={subcategorie.price}
                        description={subcategorie.description}
                        />
                )})}
        </div>
        )}

  return (
    <div>
        <div className="flex justify-between items-center my-[1em] p-[1em] hover:scale-[1.01] hover:duration-500 border-b-2 border-black">
            <button onClick={()=>handleShow(id)}>
               {appear ?
               <i className="ri-indeterminate-circle-fill lg:text-[3em] sm:text-[2em] text-[2em] text-red-600 lg:ml-[1.5em] sm:ml-[0.5em] "> </i> :
               <i className="ri-add-circle-fill lg:text-[3em] sm:text-[2em] text-[2em] text-green-600 lg:ml-[1.5em] sm:mñ-[0.5em]"> </i>
               }
               </button>
            <div className="flex items-center justify-end">
              <img 
                  className="w-[10vw] rounded-[10%] md:mr-[1em] sm:mr-[0.5em]"
                  src={image}
                  alt={name}
              />
              <div className="text-center w-[80%]">
                <h1 className="lg:text-[1.5rem] md:text-[1rem] sm:text-[0.9rem] font-bold animate-pulse text-teal-800 ">{name}</h1>
                <p className="md:text-[0.75rem] sm:text-[0.6rem] text-[0.6rem]">{description}</p>
              </div>
            </div>
        </div>
        <div className="p-[1em]" style={appear ? show : hide}>
           {showSubcategorie(id)}
        </div>
    </div>
  );
}

export default CardServices;
