import React, { useState, useEffect } from "react";
import "flowbite";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Nav() {
  const [en, setEN] = useState(true);
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState(""); // حالة لتتبع العنصر النشط

  const toggleButton = () => {
    setEN(!en);
  };

  const toggleButtonDark = () => {
    setDark(!dark);
  };

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    function handleScroll () {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;
      getActiveSection(sections,scrollPosition)
    changeNavbarBg(scrollPosition)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handle Link Click
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    const navHeight = document.querySelector('nav').offsetHeight; 
    window.scrollTo({
      top: targetElement.offsetTop - navHeight +10
    });
  };
  // Change Navbar bg
  function changeNavbarBg (scrollPosition){
   const nav = document.querySelector('nav');
      if (scrollPosition < 60) {
        nav.classList.add('bg-slate-800'); 
        nav.classList.remove('nav-bg'); 
      } else {
        nav.classList.remove('bg-slate-800'); 
        nav.classList.add('nav-bg'); 
      }
}
// Get active section
function getActiveSection(sections,scrollPosition){
   sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop - sectionHeight / 3 && 
          scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          setActiveSection(section.id);
        }
      });}

  return (
    <div>
      <nav className="px-3 z-50 md:px-0 fixed w-full justify-between align-middle py-5 bg-opacity-90 md:bg-opacity-30 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <h3 className="font-semibold text-3xl">Nehal Khaled</h3>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            <i
              onClick={toggleButtonDark}
              className={`fa-solid mx-4 fa-${dark ? "moon" : "sun"} fa-xl`}
            ></i>
            <button
              className="mr-5 p-2 border border-bg-gray-100 overflow-hidden shadow-button rounded-md mt-1"
              onClick={toggleButton}
            >
              <span className={`fi ${en ? "fi-eg" : "fi-us"} mr-1`}></span>
              <i>{en ? "ar" : "en"}</i>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="rounded-lg flex flex-col mt-4 text-center transition-all duration-300 ease-in-out overflow-hidden font-semibold text-lg md:flex-row">
              {links.map((link) => (
                <li
                  key={link.href}
                  className={`text-left lg:shadow-button my-1 px-2 py-1 rounded-lg md:py-0 ${
                    activeSection === link.href.substring(1)
                      ? "bg-blue-400 text-white"
                      : ""
                  }`}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
