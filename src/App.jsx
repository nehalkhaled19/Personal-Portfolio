import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ParticlesComponent from "./components/Particles/Particles";
import "animate.css";

export default function App() {



// Function to handle animation for a specific element
const handleAnimation = (element, animationIn, animationOut) => {
  if (isElementInView(element)) {
    element.classList.add("animate__animated", animationIn);
    element.classList.remove(animationOut);
  } else {
    element.classList.add(animationOut);
    element.classList.remove(animationIn);
  }
};

// Function to animate specific sections (without using ref, using querySelectorAll)
const animateSection = () => {
  const sections = document.querySelectorAll(".animate-section");
  sections.forEach((section) => {
    const animationIn = section.dataset.animationIn || 'animate__fadeIn';
    const animationOut = section.dataset.animationOut || 'animate__fadeOut';
    handleAnimation(section, animationIn, animationOut);
  });
};

// Scroll handler function to trigger animations
const handleScroll = () => {
  animateSection();
};







  // Utility function to check if an element is in the viewport
  const isElementInView = (element) => {
    const { top, bottom } = element.getBoundingClientRect();
    return top < window.innerHeight && bottom > 0;
  };

  // Function to handle animation for a specific element
  const handleAnimation = (element, animationIn, animationOut) => {
    if (isElementInView(element)) {
      element.classList.add("animate__animated", animationIn);
      element.classList.remove(animationOut);
    } else {
      element.classList.add(animationOut);
      element.classList.remove(animationIn);
    }
  };

  // Function to animate specific sections
  const animateSections = () => {
    const sections = document.querySelectorAll(".animate-element");
    sections.forEach((section) => {
      const animationIn = section.dataset.animationIn;
      const animationOut = section.dataset.animationOut;
      handleAnimation(section, animationIn, animationOut);
    });
  };

  useEffect(() => {
    const handleScroll = () => animateSections();
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <ParticlesComponent />
    </div>
  );
}
