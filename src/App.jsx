import React from "react";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Opportunity from "./components/Opportunity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const App = () => {
  return (
    <>
      <div className="relative min-h-screen text-gray-300 overflow-x-hidden">
        <ScrollProgress />
        <Header />
        <HeroSection/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Education/>
        <Opportunity/>
        <Contact/>
        <Footer/>
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default App;
