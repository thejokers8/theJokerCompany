import React from "react";
import { technologies } from "../../jokers-data";

function Skills({ skills }) {
  const memberIcons = technologies.filter((icon) => skills.includes(icon.name));
  const renderSkills = memberIcons.map((icon) => (
    <img
      className="icon-skills mx-1 pb-3"
      key={icon.id}
      src={icon.link}
      alt={icon.name}
      title={icon.name.toUpperCase()}
      width="20px"
    />
  ));

  return (
    <div>
      <div className="image-icon flex flex-wrap my-2">{renderSkills}</div>
      <p className="technologies flex text-black">Technologies</p>
    </div>
  );
}

export default Skills;
