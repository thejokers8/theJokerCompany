import ReactCardFlip from "react-card-flip";
import React, { useContext, useState } from "react";
import { Context } from "../../context";

function CardFlip({
  amount,
  id,
  href,
  imageAlt,
  imageSrc,
  name,
  price,
  description,
}) {
  const { addToCart, removeFromCart } = useContext(Context);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onClick={handleClick}
        className="service-card services-color-description h-80 hover:scale-105 hover:text-green-900 hover:rounded-[1rem] hover:font-extrabold tracking-wide"
      >
        <a href={href}>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="service-image w-full h-full object-center object-cover"
            />
          </div>
          <div className="service-card-description flex mt-2 justify-between items-center px-3">
            <h3 className="text-title text-[0.9rem] font-bold">{name}</h3>

            <p className="text-description text-[0.9rem] font-extrabold text-green-600">
              {price.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
                currencyDisplay: "code",
              })}
            </p>
          </div>
        </a>
      </div>
      <div>
        <div
          className="services-details h-80 px-4 flex flex-col justify-between py-12 items-center w-full text-xs aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 text-center cursor-pointer"
          onClick={handleClick}
        >
          <p className="service-description">{description}</p>
          <img
            className="service-small-image rounded-full"
            src={imageSrc}
            width="100px"
          />
        </div>
        <div className=" flex items-center justify-center space-x-2 text-xl">
          <i
            onClick={() => removeFromCart(id)}
            className="ri-indeterminate-circle-line cursor-pointer hover:scale-110"
          ></i>
          <div className="font-extrabold">
            {amount} {amount <= 1 ? "H" : "Hrs"}
          </div>
          <i
            onClick={() => addToCart(id)}
            className="ri-add-circle-line cursor-pointer hover:scale-110"
          ></i>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default CardFlip;
