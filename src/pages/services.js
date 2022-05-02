import React, { useContext, useEffect } from "react";
import { Context } from "../context";
import CardFlip from "../components/services/cardFlip";
import DynamicTxt from "../components/contact/DinamycText";

function Services() {
  useEffect(() => {
    document.title = "Services - The Joker Company";
  }, []);

  const { allServices } = useContext(Context);

  return (
    <div className="point1 pb-10">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="services-info flex flex-col items-center ">
          <h1 className="text-center  title-projects font-bold pt-8 mb-4">
            Joker shop
          </h1>
          <p className="services-text mt-8">
            Here you can find some services and solutions we currently offer.
          </p>
          <div className="flex items-center mt-1 mb-12 border-b-4 border-gray-900 pb-12">
            <p className="services-text mr-2">
              <strong className="text-green-900 font-bold">Remember:</strong>
              if you got a custom need don't hesitate to
            </p>
            <div className="w-fit text-green-900 font-bold">
              <DynamicTxt />
            </div>
          </div>
        </div>
        <div className="service-container-cards grid grid-cols-3 gap-x-6 ">
          {allServices.map((product) => (
            <CardFlip
              id={product.id}
              amount={product.amount}
              key={product.id}
              href={product.href}
              imageAlt={product.imageAlt}
              imageSrc={product.imageSrc}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
