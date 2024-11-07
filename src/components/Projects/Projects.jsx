import React, { useEffect, useState } from "react";
import projectsList from "./projectList";
import skillsList from "../Skills/skillsList";
export default function Projects() {
  const [projectsArray, setProjectsArray] = useState([]);

  function getProjects(lan = "all") {
    selectActiveLink(lan);
    lan === "all" ? setProjectsArray(projectsList) : filterProjects(lan);
  }

  function filterProjects(lan) {
    let newArray = projectsList.filter((e) => e.lan === lan);
    setProjectsArray(newArray);
  }

  useEffect(() => {
    getProjects();
  }, []);
  function selectActiveLink(lan) {
    const navlinks = document.querySelectorAll(".project-navlink");
    console.log(navlinks);

    navlinks.forEach((e) => {
      const getLan = e.getAttribute("data-bs-target");
      getLan == lan
        ? e.classList.add("active-project-navlink")
        : e.classList.remove("active-project-navlink");
      console.log(getLan);
    });
  }

  return (
    <section className="container text-center main-border">
      <h2 className="main-header m-auto">
        <i className="fa-solid fa-folder-open fa-xs icon-color "></i> Projects
      </h2>
      <nav>
        <ul className="inline-flex m-auto my-9 font-semibold text-lg ">
          <li
            onClick={() => getProjects()}
            data-bs-target="all"
            className="mx-0 px-8 py-2 rounded-sm cursor-pointer project-navlink "
          >
            All
          </li>
          <li
            onClick={() => getProjects("html&css")}
            data-bs-target="html&css"
            className="mx-0 px-8 py-2 rounded-sm cursor-pointer project-navlink  "
          >
            HTML & CSS
          </li>
          <li
            onClick={() => getProjects("js")}
            data-bs-target="js"
            className="mx-0 px-8 py-2 rounded-sm cursor-pointer project-navlink "
          >
            Js
          </li>
          <li
            onClick={() => getProjects("react")}
            data-bs-target="react"
            className="mx-0 px-8 py-2 rounded-sm cursor-pointer project-navlink  "
          >
            React.js
          </li>
        </ul>
      </nav>
      <div className="flex flex-wrap ">
        {projectsArray?.map((element, index) => {
          return (
            <div className="w-1/3 z-30 p-4">
              <div>
                <img
                  src={element.src}
                  className="w-full rounded-lg"
                  alt=""
                  key={index}
                />{" "}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
