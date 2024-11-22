import React, { useEffect, useState } from "react";
import projectsList from "./projectList";

export default function Projects() {
  const [projectsArray, setProjectsArray] = useState([]);
  const [animationClass, setAnimationClass] = useState("");

  function getProjects(lan = "all") {
    setAnimationClass("animate__fadeOutDown");

    selectActiveLink(lan);

    setTimeout(() => {
      lan === "all" ? setProjectsArray(projectsList) : filterProjects(lan);
      setAnimationClass("animate__fadeInDown");
    }, 300);
  }

  function filterProjects(lan) {
    const newArray = projectsList.filter((e) => e.lan === lan);
    setProjectsArray(newArray);
  }

  useEffect(() => {
    getProjects();
  }, []);

  function selectActiveLink(lan) {
    const navlinks = document.querySelectorAll(".project-navlink");
    navlinks.forEach((e) => {
      const getLan = e.getAttribute("data-bs-target");
      getLan === lan
        ? e.classList.add("active-project-navlink")
        : e.classList.remove("active-project-navlink");
    });
  }

  return (
    <section id="projects" className="overflow-hidden" >
     <main className="container text-center main-border opacity-0 animate-section"  style={{ transition: 'opacity 0.2s ease' }} 
          data-animation-out="animate__fadeOutDown"
          data-animation-in="animate__fadeInDown" 
     >
      <h2 className="main-header m-auto">
        <i className="fa-solid fa-folder-open fa-xs icon-color "></i> Projects
      </h2>
      <nav>
        <ul className="inline-flex flex-wrap justify-center m-auto my-9 font-semibold text-lg">
          <li
            onClick={() => getProjects()}
            data-bs-target="all"
            className="mx-0 px-8 py-2 rounded-sm cursor-pointer project-navlink"
          >
            All
          </li>
          <li
            onClick={() => getProjects("html&css")}
            data-bs-target="html&css"
            className="mx-0 px-8 py-2 rounded-sm cursor-pointer project-navlink"
          >
            HTML & CSS
          </li>
          <li
            onClick={() => getProjects("js")}
            data-bs-target="js"
            className="mx-0 px-8 py-2 rounded-sm cursor-pointer project-navlink"
          >
            Js
          </li>
          <li
            onClick={() => getProjects("react")}
            data-bs-target="react"
            className="mx-0 px-8 py-2 rounded-sm cursor-pointer project-navlink"
          >
            React.js
          </li>
        </ul>
      </nav>
      <div className="overflow-hidden z-30 opacity-100">
       
        <div className={`flex flex-wrap animate__animated ${animationClass}`}>
          {projectsArray.map((element, index) => (
            <div className="md:w-2/4 lg:w-1/3 py-3  md:p-4 relative layer-container" key={index}>
              <div className="project-layer rounded-lg overflow-hidden">
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-medium project-name">{element.name}</h2>
                  <div className="flex justify-center">
          <a target="_blank" href={element.repo}>
            <div className="mr-1 w-9 h-9 rounded-full flex items-center justify-center bg-icon text-white ">
              <i class="fa-solid fa-link "></i>
            </div>
          </a>
          <a target="_blank"  href={element.liveDemo}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-icon text-white ">
              <i class="fa-solid fa-display "></i>
            </div>
          </a></div>
                  
                  
                  
                  </div>
              </div>
              <img
                src={element.src}
                className="w-full  rounded-lg"
                alt={element.name}
              />
            </div>
          ))}
        </div>
      </div></main>
    </section>
  );
}
