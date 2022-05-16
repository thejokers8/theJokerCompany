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
    <div className="App-about flex flex-col bg-gradient-to-r from-sky-800 via-slate-500 to-sky-900 point3">
      <div className="about-summary flex flex-col px-40 pt-20 pb-2 ">
        <button className="prev-slide animate-bounce" onClick={PrevSlide}> <i className="ri-arrow-left-fill"></i> </button>
        <button className="next-slide animate-bounce" onClick={NextSlide}> <i className="ri-arrow-right-fill"></i> </button>
        {pageAbout}
        <h2 className="title-projects font-bold mt-14">Teamwork</h2>
      </div>

      <div className="about-individual flex justify-between items-center mt-5">
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
