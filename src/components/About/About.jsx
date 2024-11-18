import React, { useEffect } from "react";
import img from "../../assets/bg1.svg";
export default function About() {
  useEffect(()=>{
    console.log(document.querySelector('section').getBoundingClientRect());
  },[])
  
  return (
    <div className="main-border pt-0">
    <section id="about" className="container lg:flex">
      <div className="lg:w-2/4 ">
        <h2 className="main-header class-after">
          <span> <i class="icon-color fa-regular line-h fa-user fa-xs"></i> A</span>bout me
        </h2>
        <article className='max-w-max'>
        <p className="main-text"> I’m a front-end developer passionate about creating engaging web experiences. I started my journey two years ago with self-directed learning and have since built a solid foundation in HTML, CSS, and JavaScript, along with expertise in frameworks like React.js, Sass, Tailwind, Bootstrap, and Next.js to develop interactive applications. </p> <p className="main-text"> I focus on projects that provide real value and seamless user experiences, designing intuitive interfaces and refining my approach through tools like jQuery and responsive design techniques. I aim to engage in continuous learning and contribute to innovative projects that harmonize creativity and functionality. </p> <p className="main-text"> I’m eager to challenge myself, create impactful web solutions, and collaborate with others who share my passion for web development. </p>
        </article>
      </div>
      <div className=" lg:w-2/4 z-30  ">
          <img src={img} alt="girl writes codes " className="w-4/5 m-auto lg:ml-auto" />
          </div>
    </section></div>
  );
}
