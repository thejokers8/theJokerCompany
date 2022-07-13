import React, { useEffect } from "react";
import { description } from "../../jokers-data";

function JokersPhotos({ jokerData, setMemberDescription, changeMember }) {

  useEffect(() => {
    setMemberDescription(
      description.filter((element) => element.id === changeMember)
    );
  }, [changeMember]);

  return (
    <>
      <div className="text-center">
        <img
          src={jokerData.image}
          className="joker-photo rounded-full w-40 h-40 object-cover mb-4 mx-auto shadow-lg"
          alt={jokerData.name}
        />
        <h5 className="text-xl title font-medium leading-tight mb-2">
          {jokerData.name}
        </h5>
        <p className="title text-green-600">{jokerData.career}</p>
      </div>
     
    </>
  );
}

export default JokersPhotos;
