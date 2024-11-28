import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const handleClick = (section) => {
    setActive(section);
    setIsMenuOpen(false); // Close menu after clicking
    gsap.to(".dropdown-menu", {
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      y: "-100%",
    });
  };

  useEffect(() => {
    const sections = ["home", "about", "work", "contact"];
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `.${section}`,
        start: "top center",
        end: "bottom top",
        onEnter: () => setActive(section),
        onLeaveBack: () => setActive(""),
      });
    });
  }, []);

  const scrollToSection = (section) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: `.${section}`,
        offsetY: 80, // Adjust navbar height
      },
      ease: "power2.out",
    });
    handleClick(section);
  };

  // GSAP Animation for dropdown menu
  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Animate the dropdown menu from top and fade in
      gsap.to(".dropdown-menu", {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        y: "0%", // Bring the menu into view
      });
      gsap.from(".dropdown-menu div", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2, // Delays each link's appearance
      });
    } else {
      // Animate the dropdown menu out of view with fade out
      gsap.to(".dropdown-menu", {
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        y: "-100%", // Slide the menu off the screen
      });
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full px-4 py-6 bg-transparent backdrop-blur-lg z-50 font-Body">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <div className="text-blue-500 text-2xl font-bold z-10">
          {" "}
          Bhavya Bansal
        </div>

        {/* Hamburger Icon for small screens */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-2xl focus:outline-none z-60" // Ensure it stays on top
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links for larger screens */}
        <ul className="hidden lg:flex space-x-8">
          <NavLink
            label="Home"
            section="home"
            active={active}
            onClick={() => scrollToSection("home")}
          />
          <NavLink
            label="About"
            section="about"
            active={active}
            onClick={() => scrollToSection("about")}
          />
          <NavLink
            label="Work"
            section="work"
            active={active}
            onClick={() => scrollToSection("work")}
          />
          <NavLink
            label="Contact"
            section="contact"
            active={active}
            onClick={() => scrollToSection("contact")}
          />
        </ul>
      </div>

      {/* Dropdown menu for small screens */}
      <div
        className="dropdown-menu fixed inset-x-0 top-0 bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 lg:hidden h-screen opacity-0 w-full z-50"
        style={{ transform: "translateY(-100%)" }} // Initial off-screen positioning
      >
        <button
          onClick={toggleMenu}
          className="text-white text-3xl absolute top-6 right-6 z-60" // Positioned inside the menu
        >
          <FiX />
        </button>
        <NavLink
          label="Home"
          section="home"
          active={active}
          onClick={() => scrollToSection("home")}
        />
        <NavLink
          label="About"
          section="about"
          active={active}
          onClick={() => scrollToSection("about")}
        />
        <NavLink
          label="Work"
          section="work"
          active={active}
          onClick={() => scrollToSection("work")}
        />
        <NavLink
          label="Contact"
          section="contact"
          active={active}
          onClick={() => scrollToSection("contact")}
        />
      </div>
    </nav>
  );
};

const NavLink = ({ label, section, active, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`text-white hover:text-blue-600 transition-all duration-300 ease-in-out cursor-pointer text-lg ${
          active === section ? "text-blue-500 " : ""
        }`}
      >
        {label}
      </button>
    </div>
  );
};

export default Navbar;
