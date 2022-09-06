import React, { useEffect, useState } from "react";
import { description } from "../jokers-data";
import Skills from "../components/about/skills";
import Contact from "../components/about/contact";
import JokersPhotos from "../components/about/jokers-photos";
import Description from "../components/about/decription";
import AboutIntroduce from "../components/about/about-introduce";
import AboutCompany from "../components/about/about-company";

function About() {
  useEffect(() => {
    document.title = "About - The Joker Company";
  }, []);

  const [memberDescription, setMemberDescription] = useState([description[0]]);

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
  

  return (
    <div className="flex flex-col justify-center pt-24 md:pt-0 lg:pt-5 mt-16">
      <div className="w-full mt-[-10em] sm:mt-[-10em] md:mt-[1em] lg:mt-0">
        <div className="about-summary flex justify-center px-32 pt-20 pb-2">
          <AboutCompany /> 
        </div>
        <AboutIntroduce />
      </div>
      <div className="bg-[rgba(176,176,176,0.08)] text-center mt-20 pb-10">
        <h2 className="title-projects font-bold mt-5 lg:mt-[2em] ">Our Team</h2>
        <div className="about-individual flex items-center justify-center ">
          <button onClick={prevMember} className="prev animate-bounce">
            {" "}
            <i className="ri-arrow-left-s-line"></i>{" "}
          </button>
          <div className="about-especific w-[80vw] flex">
            <div className="Photos w-6/12 flex justify-center items-center about-joker">
              <JokersPhotos
                jokerData={memberDescription[0]}
                setMemberDescription={setMemberDescription}
                changeMember={changeMember}
              />
            </div>
            <div className="about-description w-[70vw] px-20 flex flex-col justify-center text-green-500">
              <Description description={memberDescription[0]} />
              <Contact contact={memberDescription[0]} />
              <Skills skills={memberDescription[0].skills} />
            </div>
          </div>
          <button onClick={nextMember} className="next animate-bounce">
            {" "}
            <i className="ri-arrow-right-s-line"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
