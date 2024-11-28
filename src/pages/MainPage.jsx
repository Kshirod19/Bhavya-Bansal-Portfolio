import React from "react";
import HeroSection from "../components/HeroSection";
import Contact from "../components/Contact";
import About from "../components/About";
import Work from "../components/Work";
import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default MainPage;
