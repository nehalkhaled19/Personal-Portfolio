import React, { useEffect, useState } from "react";
import projectsList from "./projectList";
import skillsList from "../Skills/skillsList";
export default function Projects() {
  
  const [projectsArray, setProjectsArray] = useState([]);

  function getProjects(lan = "all") {
    lan === "all"?  setProjectsArray(projectsList): filterProjects(lan);
  }

  function filterProjects(lan) {
    let newArray = projectsList.filter((e) => e.lan === lan);
    setProjectsArray(newArray);
  }


  return (
    <section className="container text-center main-border">
      <h2 className="main-heder m-auto class-before ">
        <i className="fa-solid fa-folder-open fa-xs icon-color "></i> Projects
      </h2>
      <nav>
        <ul className="flex align-middle mt-2">
          <li className="mx-2 p-0 my-0">
            <a onClick={()=>getProjects()} data-bs-target="#goals">All</a>
          </li>
          <li className="mx-2 ">
            <a onClick={()=>getProjects('html&css')} data-bs-target="html&css">HTML & CSS</a>
          </li>
          <li className="mx-2 ">
            <a onClick={()=>getProjects('js')} data-bs-target="js">Js</a>
          </li>
          <li className="mx-2 ">
            <a onClick={()=>getProjects('react')} data-bs-target="react">React.js</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
