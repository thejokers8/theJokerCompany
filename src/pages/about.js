import React, { useEffect, useState } from "react";
import { description } from "../jokers-data";
import Skills from "../components/about/skills";
import Contact from "../components/about/contact";
import JokersPhotos from "../components/about/jokers-photos";
import Description from "../components/about/decription";

function About() {
  useEffect(() => {
    document.title = "About - The Joker Company";
  }, []);

  const [memberDescription, setMemberDescription] = useState([description[0]]);

  return (
    <div className="App-about flex flex-col bg-gradient-to-r from-sky-800 via-slate-500 to-sky-900 point3">
      <div className="about-summary flex flex-col px-40 pt-20 pb-2 ">
        {" "}
        <h1 className="title-projects text-center font-bold pb-0 mb-5">
          About us
        </h1>
        <p className="about-text text-center text-sm mx-auto w-3/4 border-b-4 border-gray-900 pb-12">
          We created a <strong className="">multitask team</strong> with some IT
          skills. Our prior background in biomedical sciences, electronic,
          mechatronics and mechanics give us a widely open range of tools to
          combine within our projects.{" "}
          <strong className="">
            We added web development skills beside our engineering knowledge to
            setup, run, manage and advice projects all around the world.{" "}
          </strong>
        </p>
      </div>

      <div className="about-individual flex justify-between items-center py-4">
        <div className="about-especific flex">
          <div className="Photos w-6/12 flex justify-center items-center about-joker">
            <JokersPhotos
              jokerData={memberDescription[0]}
              setMemberDescription={setMemberDescription}
            />
          </div>
          <div className="about-description w-3/4 px-20 flex flex-col justify-center text-green-500">
            <Description description={memberDescription[0]} />
            <Contact contact={memberDescription[0]} />
            <Skills skills={memberDescription[0].skills} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
