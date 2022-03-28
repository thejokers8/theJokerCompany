import React, { useState, useEffect } from "react";
import { description } from "../../jokers-data";

function JokersPhotos({ jokerData, setMemberDescription }) {
  const [changeMember, setChangeMember] = useState(1);

  function prevMember() {
    changeMember > 1
      ? setChangeMember(changeMember - 1)
      : setChangeMember(description.length);
  }

  function nextMember() {
    changeMember <= description.length - 1
      ? setChangeMember(changeMember + 1)
      : setChangeMember(1);
  }

  useEffect(() => {
    setMemberDescription(
      description.filter((element) => element.id === changeMember)
    );
  }, [changeMember]);

  return (
    <>
      <button onClick={prevMember} className="prev animate-bounce">
        {" "}
        <i className="ri-arrow-left-s-line"></i>{" "}
      </button>
      <div className="text-center">
        <img
          src={jokerData.image}
          className="rounded-full w-40 h-40 object-cover mb-4 mx-auto shadow-lg"
          alt={jokerData.name}
        />
        <h5 className="text-xl title font-medium leading-tight mb-2">
          {jokerData.name}
        </h5>
        <p className="title text-green-600">{jokerData.career}</p>
      </div>
      <button onClick={nextMember} className="next animate-bounce">
        {" "}
        <i className="ri-arrow-right-s-line"></i>{" "}
      </button>
    </>
  );
}

export default JokersPhotos;
