import React, { useEffect } from "react";
import JokerAbout from "../components/home/jokerAbout";
import ProjectsCarrousel from "../components/home/ProjectsCarrousel";
import Topics from "../components/home/topics";

function Home() {
  useEffect(() => {
    document.title = "Home - The Joker Company";
  }, []);
  return (
    <div className="App-home flex justify-between items-center ">
      <main className="w-full text-center">
        <JokerAbout />
        <ProjectsCarrousel />
        <Topics />
      </main>
    </div>
  );
}

export default Home;
