import React, { useEffect } from "react";
import JokerAbout from "../components/home/jokerAbout";
import Row from "../components/home/Row";
import Topics from "../components/home/topics";
import Projects from "../components/home/projects";

function Home() {
  useEffect(() => {
    document.title = "Home - The Joker Company";
  }, []);
  return (
    <div className="App-home flex justify-between items-center ">
      <main className="w-full text-center">
        <JokerAbout />
        <Row />
        {/* <Projects /> */}
        <Topics />
      </main>
    </div>
  );
}

export default Home;
