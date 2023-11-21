import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import React, { useState } from "react";
import Projects from "./components/projects/Projects";
import useLocalStorage from "use-local-storage";

function App() {
  const [language, setLanguage] = useLocalStorage("language", "English");
  return (
    <div className="h-[2200px] container bg-bgDark relative overflow-hidden">
      <Header language={language} setLanguage={setLanguage} />
      <div className="absolute -left-[400px] md:-left-64 rotate-45 w-[650px] top-4 md:top-0 h-[650px] md:w-[640px] md:h-[660px] bg-darkGray rounded-[200px] md:rounded-[170px]"></div>
      <div className="hidden  md:block absolute w-[29px] h-[29px] rounded-[9px] rotate-45 left-[560px] top-24 bg-midGray"></div>
      <div className="hidden md:block absolute w-[65px] h-[65px] rounded-[18px] rotate-45 left-[960px] top-16 bg-darkGray"></div>
      <div className="hidden md:block absolute w-[49px] h-[49px] rounded-[14px] rotate-45 left-[1300px] top-48 bg-midGray"></div>
      <div className="hidden md:block absolute w-[49px] h-[49px] rounded-[14px] rotate-45 left-[580px] top-[550px] bg-midGray"></div>
      <div className="hidden md:block absolute w-[115px] h-[115px] rounded-[34px] rotate-45 left-[1340px] top-[400px] bg-darkGray"></div>
      <div className="md:hidden absolute w-[15px] h-[15px] rounded-[4px] rotate-45 left-[15px] top-[830px] bg-midGray"></div>
      <About language={language} setLanguage={setLanguage} />
      <Projects language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default App;
