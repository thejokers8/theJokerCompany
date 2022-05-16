import React from "react";
import { platforms } from "../../platforms-projects";

function PlatformsProjects({ platform, date}) {
  const projectPlatform = platforms.filter((icon) => platform.includes(icon.name));
  const renderPlatforms = projectPlatform.map((icon) => (
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
    <div className="ml-[70%] my-5">
        <p 
            className="text-[0.7rem] font-semibold uppercase">
            {date}
        </p>
      <div className="image-icon flex flex-wrap my-2">
          {renderPlatforms}
      </div>
    </div>
  );
}

export default PlatformsProjects;