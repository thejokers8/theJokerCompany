import React from "react";
import { fields } from "../../fields-company-data";
import { Link } from "react-router-dom";
import "tw-elements";

function Topics() {
  const buttonRender = fields.map((element) =>
    element.id === 0 ? (
      <button
        key={element.id}
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide-to={element.id}
        className="active"
        aria-current="true"
        aria-label={`Slide ${element.id + 1}`}
      ></button>
    ) : (
      <button
        key={element.id}
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide-to={element.id}
        aria-label={`Slide ${element.id + 1}`}
      ></button>
    )
  );

  const imageRender = fields.map((element) =>
    element.id === 0 ? (
      <div
        key={element.id}
        className="carousel-item active relative float-left w-full"
      >
        <img
          src={element.image}
          className="block w-full image-carousel h-[400px] rounded opacity-90 object-fit bg-cover"
          alt="..."
        />
        <div className="carousel-caption hidden p-6 rounded-full mb-8 bg-gray-300 opacity-80 mb-8 text-black md:block absolute text-center">
          <h5 className="text-lg uppercase font-bold text-topics">{element.field}</h5>
        </div>
      </div>
    ) : (
      <div
        key={element.id}
        className="carousel-item relative float-left w-full"
      >
        <img
          src={element.image}
          className="image-carousel block w-full h-[400px] object-fit rounded opacity-90 bg-cover"
          alt="..."
        />
        <div className="carousel-caption p-6 rounded-full bg-gray-300 opacity-80 mb-8 text-black md:block hidden absolute text-center">
          <h5 className="text-topics text-base uppercase font-bold">
            {element.field}
          </h5>
        </div>
      </div>
    )
  );

  return (
    <div className="topics flex overflow-hidden py-20 bg-cover bg-[url(https://images.pexels.com/photos/7130489/pexels-photo-7130489.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)]">
      <div className="arrow-content relative w-3/6 flex flex-col justify-center items-center">
        <div className="text-container w-3/4 arrow p-12 bg-[#518071]">
          <h1 className="text-goals">
            We can provide solutions in any of the following fields
          </h1>
        </div>
        <Link
          to="/contact"
          className="contact-btn inline-block mt-8 mb-8 px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg hover:text-green-600 hover:scale-105 transition duration-150 ease-in-out w-fit mx-auto absolute opacity-50 hover:opacity-90"
        >
          Contact Us
        </Link>
      </div>
      <div className="w-3/6 flex flex-col items-center justify-center">
        <div
          id="carouselDarkVariant"
          className="carousel-shadow mb-[2rem] animate-pulse carousel slide w-5/6 carousel-fade h-[400px] carousel-dark relative overflow-hidden"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            {buttonRender}
          </div>
          <div className="carousel-inner relative w-full">{imageRender}</div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topics;
