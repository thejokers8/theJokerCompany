import React, { useEffect } from "react";
import { categories } from "../projects-categories";
import CardServices from "../components/services/card-categories";
import DynamicTxt from "../components/contact/DinamycText";
import { Link } from "react-router-dom";

function Services() {
  useEffect(() => {
    document.title = "Services - The Joker Company";
  }, []);

  return (
    <div className="pb-10 ">
      <div className="bg-[#003016] rounded-b-[2em] shadow-xl pt-32 pb-20 px-10 sm:px-20 md:px-32">
          <div className="p-10 bg-green-900 md:mx-5 lg:mx-10 rounded-tr-[2em] rounded-bl-[2em]">
            <h1 className="text-[1rem] sm:text-[1.5rem] md:text-[2rem] text-white font-bold uppercase mb-10 text-center">
              Software solution services as you always has wanted
            </h1>
            <p className="text-base md:text-2xl text-gray-400 mb-10">
                We develop all your ideas as you never imagined before. We are a company dedicated
                to satisfy the needs of our clients in order to find adequate solutions to their
                requirements. We are always thinking about developing the software just as you want
                it. Talk to our experts today.  
            </p>
            <Link
              to="/contact"
              className="text-[1rem] sm:text-[1.2rem] uppercase text-white font-bold px-[1em] py-[0.5em] bg-green-700 rounded-2xl"
            >
              Contact us
            </Link>
          </div>
        </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="services-info flex flex-col items-center ">
          <h1 className="text-center title-projects font-bold pt-8 mb-4">
            Welcome to the Joker shop
          </h1>
          <p className="services-text text-center text-xl mt-8 mx-10 mb-10 ">
            Here you can find some services and solutions we currently offer.
          </p>
          <div className="flex items-center mt-1 mb-12 border-b-4 border-gray-900 pb-12">
            <p className="services-text text-base sm:text-xl mr-2">
              <strong className="text-green-900 font-bold">Remember:</strong>
              if you got a custom need don't hesitate to
            </p>
            <div className="w-fit text-green-900 font-bold text-xl">
              <DynamicTxt />
            </div>
          </div>
        </div>
        <div>
          {categories.map((category) => (
            <CardServices
              id={category.category}
              name={category.name}
              key={category.category}
              description={category.description}
              image={category.image}
              show={category.display}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
