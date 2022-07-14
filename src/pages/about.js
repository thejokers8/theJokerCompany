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
  const [slide, setSlide] = useState(0);

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

  

  function PrevSlide() {
    if (slide > 0) setSlide(prev => prev - 1)
    else setSlide(1)
  }

  function NextSlide() {
    if (slide < 1) setSlide(prev => prev + 1)
    else setSlide(0)
  }

  const pageAbout = slide === 0 ? <AboutIntroduce /> : <AboutCompany />

  return (
    <div className="App-about flex flex-col justify-center bg-gradient-to-r from-sky-800 via-slate-500 to-sky-900 point3">
      <div className="about-summary flex justify-center px-40 pt-20 pb-2 ">
        <div className="flex items-center">
          <button className="animate-pulse" onClick={PrevSlide}> <i className="ri-arrow-left-s-line text-[3rem] font-bold"></i> </button>
        </div>
        <div className="about-page">
          {pageAbout}
        </div>
        <div className="flex items-center">
          <button className="animate-pulse" onClick={NextSlide}> <i className="ri-arrow-right-s-line text-[3rem] font-bold"></i> </button>
        </div>
      </div>
      <h2 className="title-projects font-bold mt-5 lg:mt-[2em]">Our Team</h2>
      <div className="about-individual flex items-center justify-center">
          <button onClick={prevMember} className="prev animate-bounce">
                    {" "}
                    <i className="ri-arrow-left-s-line"></i>{" "}
              </button>
        <div className="about-especific w-[70vw] flex">
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
  );
}

export default About;
