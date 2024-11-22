import React, { useEffect, useState } from "react";
import "flowbite";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Navbar({theme, toggleTheme}) {
  const [en, setEN] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeSection, setActiveSection] = useState(""); 

  const toggleButton = () => {
    setEN(!en);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const nav = document.querySelector("nav");

    const ul = document.querySelector("ul");

    if(isMenuOpen == false){
      nav.classList.add("static-Navbar");
      ul.classList.add("static-Navbar");
      nav.classList.remove("nav-bg");
      ul.classList.remove("nav-bg");
    } else {
      nav.classList.remove("static-Navbar");
      nav.classList.add("nav-bg");
      ul.classList.remove("static-Navbar");
      ul.classList.add("nav-bg");
    }
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
    function handleScroll() {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;
      getActiveSection(sections, scrollPosition);
      changeNavbarBg(scrollPosition);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    const navHeight = document.querySelector("nav").offsetHeight;
    window.scrollTo({
      top: targetElement.offsetTop - navHeight + 10,
    });
  };

  function changeNavbarBg(scrollPosition) {
    const nav = document.querySelector("nav");

    if (scrollPosition < 60) {
      nav.classList.add("static-Navbar");
      // ul.classList.add("static-Navbar");
      nav.classList.remove("nav-bg");
      // ul.classList.remove("nav-bg");
    } else {
      nav.classList.remove("static-Navbar");
      nav.classList.add("nav-bg");
      // ul.classList.remove("static-Navbar");
      // ul.classList.add("nav-bg");
    }
  }
function changeBg (){

}
  function getActiveSection(sections, scrollPosition) {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (
        scrollPosition >= sectionTop - sectionHeight / 3 &&
        scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
      ) {
        setActiveSection(section.id);
      }
    });
  }

  return (
    <div>
      <nav class=" z-50 md:px-0 fixed w-full justify-between align-middle py-5 bg-opacity-90 md:bg-opacity-30 static-Navbar">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <h3 className="font-semibold text-3xl px-3 md:px-0">Nehal Khaled</h3>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center px-3 md:px-0">
          <i
              onClick={() => toggleTheme(theme === "dark")}
              className={`fa-solid mx-4 fa-${theme === "dark" ? "sun" : "moon"} fa-xl`}
            ></i>
            <button
              className="mr-5 p-2 border border-bg-gray-100 overflow-hidden shadow-button rounded-md mt-1  "
              onClick={toggleButton}
            >
              <span className={`fi ${en ? "fi-eg" : "fi-us"} mr-1`}></span>
              <i>{en ? "ar" : "en"}</i>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden shadow-button rounded-md"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleMenu}

            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="px-3 md:px-0 nav-bg md:bg-transparent rounded-lg flex flex-col mt-4 text-center overflow-hidden font-semibold text-lg md:flex-row">
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

