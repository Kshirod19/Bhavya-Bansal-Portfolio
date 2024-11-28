import React from "react";
import { IconCloud } from "./IconCloudDemo"; // Import IconCloud component
import { FaLinkedin } from "react-icons/fa6";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Contact = () => {
  return (
    <div className="contact font-Nav min-h-screen bg-gradient-to-b from-gray-700 to-gray-600 flex justify-center items-center px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
      <div className="relative flex items-center justify-center w-full h-full max-w-5xl">
        {/* LinkedIn Section */}
        <div className="text-2xl sm:text-3xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex justify-center items-center gap-3 text-white hover:text-blue-500 transition duration-300">
            <FaLinkedin className="text-4xl sm:text-5xl" />
            <a
              href="https://www.linkedin.com/in/bhavya-bansal98/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-lg sm:text-xl"
            >
              Linkedin
            </a>
          </div>
        </div>

        {/* Icon Cloud */}
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

export default Contact;
