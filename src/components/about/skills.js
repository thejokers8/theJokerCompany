import React from "react";
import { technologies } from "../../jokers-data";

function Skills({ skills }) {
  const memberIcons = technologies.filter((icon) => skills.includes(icon.name));
  const renderSkills = memberIcons.map((icon) => (
      <img
        className="icon-skills opacity-60 rounded-full mx-1 my-1 inline-block w-[22px] h-[22px] bg-white border-2 border-[rgba (0,0,0,0.4)]"
        key={icon.id}
        src={icon.link}
        alt={icon.name}
        title={icon.name.toUpperCase()}
      />
  ));

  return (
    <div className="mx-[-2em]">
      <div className="image-icon flex flex-wrap my-2 px-2">{renderSkills}</div>
      <p className="technologies flex text-black">Technologies</p>
    </div>
  );
}

export default Skills;
