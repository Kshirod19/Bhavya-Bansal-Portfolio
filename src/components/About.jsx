import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const timelineLine = document.querySelector(".timeline-line");

    // Reveal animation for timeline items with opacity and scale
    gsap.fromTo(
      timelineItems,
      { opacity: 0, scale: 0.8, y: 100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax effect for the timeline line
    gsap.fromTo(
      timelineLine,
      { height: "0%" },
      {
        height: "90%",
        backgroundColor: "#2563eb",
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 20%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="about font-Body h-auto bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 text-white overflow-hidden">
      <div className="container max-w-screen-xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          My Career Journey
        </h1>
        <div className="timeline-container relative 2xl:pt-20 xl:pt-20 lg:pt-20 md:pt-14  pt-14">
          <div
            className="timeline-line absolute left-1/2 transform -translate-x-1/2 bg-gray-600 w-1 sm:w-2 rounded-lg"
            style={{ width: "6px" }}
          ></div>

          {/* Timeline items */}
          {[
            {
              period: "May 2022 - Apr 2023",
              role: "Software Engineer",
              company: "Telaverge Communications",
            },
            {
              period: "Aug 2023 - Oct 2023",
              role: "AI Software Developer",
              company: "HeyDaw Technologies",
            },
            {
              period: "Oct 2023 - Present",
              role: "Full Stack Engineer",
              company: "FacesearchAI, Los Angeles, California",
            },
            {
              period: "Nov 2023 - Present",
              role: "Chief Technology Officer",
              company: "FacesearchAI, Los Angeles, California",
            },
            {
              period: "Apr 2024 - Present",
              role: "Chief Technology Officer",
              company: "Persist Ventures",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="timeline-item relative mb-12 sm:mb-16 lg:mb-20 flex flex-col items-center lg:flex-row lg:justify-center gap-6"
            >
              <div className="timeline-dot bg-gradient-to-r from-blue-500 to-blue-700 w-5 sm:w-6 h-5 sm:h-6 absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-gray-800"></div>
              <div className="timeline-content bg-gray-900 hover:bg-gray-950 hover:duration-500 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md lg:max-w-sm">
                <p className="text-gray-400 text-xs sm:text-sm">
                  {item.period}
                </p>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-2">
                  {item.role}
                </h3>
                <p className="mt-1">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
