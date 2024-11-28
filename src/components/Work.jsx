import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BoxReveal from "./BoxReveal"; // Ensure the path is correct
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const projects = [
    {
      title: "RealtimeAI Physician Avatar",
      description:
        "A SaaS product simulating real-time physician interactions through AI, part of Startupathon.",
    },
    {
      title: "Holy Vible",
      description:
        "A short-form video platform designed for user empowerment over engagement extraction.",
    },
    {
      title: "Search Studio",
      description:
        "Optimizing organic search traffic using advanced keyword ranking techniques.",
    },
    {
      title: "Neighborgood",
      description:
        "A platform for fostering local community connections and support networks.",
    },
    {
      title: "WeMotion",
      description:
        "A social media app promoting civic engagement through impactful voting.",
    },
  ];

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const horizSlider = document.querySelector(".horizSlider");

    gsap.to(slides, {
      xPercent: -100 * (projects.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizSlider,
        pin: true,
        scrub: 1,
        start: "top top",
        end: `+=${projects.length * window.innerHeight}`,
        snap: 1 / (projects.length - 1),
      },
    });
  }, [projects]);

  return (
    <section className="work">
      <div className="horizSlider flex h-screen w-full overflow-hidden font-Body">
        {projects.map((project, index) => (
          <div
            key={index}
            className="slide flex-shrink-0 w-screen h-screen flex justify-center items-center 
            bg-gradient-to-b from-gray-800 to-gray-700 box-border p-5"
          >
            <div
              className="content flex flex-col justify-center text-center text-white min-h-96 max-w-lg 
            box-border bg-gradient-to-b from-gray-900 to-gray-700 p-5 shadow-lg 
            md:min-h-[70%] lg:min-h-[60%] md:max-w-xl lg:max-w-2xl rounded-lg"
            >
              <BoxReveal width="100%" duration={0.8} boxColor="#5046e6">
                <h2 className="text-4xl font-bold mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
                  {project.title}
                </h2>
              </BoxReveal>

              <BoxReveal width="100%" duration={0.8} boxColor="#5046e6">
                <p className="text-lg mb-6 sm:text-base md:text-lg lg:text-xl">
                  {project.description}
                </p>
              </BoxReveal>

              <BoxReveal width="100%" duration={0.8} boxColor="#5046e6">
                <button
                  className="bg-white text-gray-900 px-5 py-2 rounded-full 
                shadow-md hover:shadow-lg hover:bg-gray-900 hover:text-white duration-500 transition sm:text-sm md:text-base lg:text-lg"
                >
                  Visit
                </button>
              </BoxReveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
