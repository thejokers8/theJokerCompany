import React from "react";

function Description({ description }) {
  return (
    <>
      <h2 className="title text-xl mb-3 font-extrabold uppercase tracking-wider ">
        {description.name.split(" ")[0]}'s description
      </h2>
      <p className="text mb-3 text-sm text-black ">{description.about}</p>
    </>
  );
}

export default Description;
