import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css"; // Import your custom CSS

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    const lines = document.querySelectorAll(".line");

    // Sequential reveal animation for lines
    lines.forEach((line, i) => {
      gsap.fromTo(
        line,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          ease: "power4.out",
          duration: 1.5,
          delay: i * 0.5, // 0.5s delay between each line
        }
      );
    });

    // Parallax + scaling effect on hero text during scroll
    const heroText = document.querySelector(".hero-text");
    gsap.to(heroText, {
      scrollTrigger: {
        trigger: ".home",
        start: "top",
        end: "bottom top",
        scrub: 1,
      },
      y: 100,
      scale: 0.9, // Scale down slightly when scrolling out
      opacity: 0,
      ease: "power4.out",
    });

    // Cleanup GSAP triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="home h-screen w-full flex flex-col items-start justify-center bg-gray-900 relative overflow-hidden font-Body">
      {/* Hero Text */}
      <div className="hero-text flex flex-col xl:px-10 lg:px-10 md:px-10 px-4 space-y-4 max-w-5xl mx-auto">
        <div className="line text-left text-5xl md:text-8xl lg:text-9xl font-bold flex flex-wrap leading-tight gap-3 xl:max-w-4xl text-gray-300">
          <span className="hover-effect text-[#708090] font-Nav">Turning</span>
          <span className="hover-effect text-[#708090] font-Nav">Code</span>
          <span className="hover-effect ">Into</span>
          <span className="hover-effect ">Solutions,</span>
        </div>
        <div className="line text-left text-3xl  md:text-6xl lg:text-5xl xl:text-6xl font-bold flex flex-wrap leading-tight gap-3 md:max-w-xl lg:max-w-3xl xl:max-w-4xl text-gray-300">
          <span className="hover-effect "> Strategies</span>
          <span className="hover-effect ">Into</span>
          <span className="hover-effect "> Breakthroughs,</span>
        </div>
        <div className="line text-left text-4xl  md:text-7xl lg:text-6xl xl:text-7xl font-bold flex flex-wrap leading-tight gap-3 md:max-w-xl  max-w-[280px] lg:max-w-4xl xl:max-w-xl text-gray-300">
          <span className="hover-effect ">And</span>
          <span className="hover-effect ">Creativity</span>
          <span className="hover-effect text-[#708090] font-Nav">Into</span>
          <span className="hover-effect text-[#708090] font-Nav">
            Innovation.
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
