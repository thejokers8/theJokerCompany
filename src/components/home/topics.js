import React from "react";
import { fields } from "../../fields-company-data";
import "tw-elements";

function Topics() {

  const fieldsRender = fields.map(rendering => {return (
    <div className="topics-cards hover:scale-105 duration-500 w-[30vh] h-[20vh] lg:mx-10 mb-24 sm:mb-24">
      <img 
        src={rendering.image}
        className="w-full h-[80%] rounded-[1em]">
        </img>
      <h3 className="capitalize mt-5 text-[1.1rem] font-semibold text-gray-400">
        {rendering.field}
      </h3>
    </div>
  )})
  return (
    <div className="px-10 sm:px-20 bg-[rgba(176,176,176,0.08)]">
      <h1 className="title-projects font-bold mt-20 mb-10">
        We provide agile software Development Solutions and Unique services
      </h1>
      <p className="mb-20 mx-5 sm:mx-32 text-[1.3rem] text-[rgba(0,0,0,0.8)]">
        We know that every company has different software and hardware criterias. 
        For that reason, we focus on providing the best possible solutions in multiples areas of information technology
      </p>
      <div className="topics-home flex items-center justify-center mb-10">
        {fieldsRender}
      </div>
    </div>
  );
}

export default Topics;
