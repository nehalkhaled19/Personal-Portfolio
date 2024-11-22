import React, { useState, useEffect } from "react";
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
  // الحصول على الثيم المخزن في LocalStorage أو استخدام الثيم الداكن كخيار افتراضي
  const savedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);

  // دالة لتبديل الثيم
  const toggleTheme = (checked) => {
    const newTheme = checked ? "light" : "dark"; // إذا كانت الحالة مفعلة (checked) يكون الثيم light
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // حفظ الثيم في localStorage
  };

  // التأثير لتحديث الثيم عند تغييره
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  // Utility function to check if an element is in the viewport
  const isElementInView = (element) => {
    const { top, bottom } = element?.getBoundingClientRect();
    return top < window.innerHeight && bottom > 50;
  };

  function sectionsLoop(sectionsClass) {
    const sections = document.querySelectorAll(`.${sectionsClass}`);
    sections.forEach((section) => {
      const animationIn = section.dataset.animationIn;
      const animationOut = section.dataset.animationOut;
      handleAnimation(section, animationIn, animationOut);
    });
  }
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

  useEffect(() => {
    function handleScroll() {
      sectionsLoop("animate-element");
      sectionsLoop("animate-section");
    }
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />{" "}
      {/* تمرير دالة toggleTheme و theme إلى Navbar */}
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <ParticlesComponent toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}
