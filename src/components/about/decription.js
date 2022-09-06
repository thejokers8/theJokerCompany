import React from "react";

function Description({ description }) {
  return (
    <>
      <h2 className="title text-2xl mb-3 font-extrabold uppercase tracking-wider ">
        Joker {description.name.split(" ")[0]}
      </h2>
      <p className="text mb-3 text-sm text-black text-justify">{description.about}</p>
    </>
  );
}

export default Description;
