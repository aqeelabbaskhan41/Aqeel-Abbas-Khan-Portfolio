import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <HeroSection/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
