import React, { useEffect } from "react";
import Typed from "typed.js";

export default function Home() {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["ront-End Developer"],
      loop: true,
      smartBackspace: true,
      showCursor: false,
      cursorChar: "|",
      autoInsertCss: true,
      backDelay: 500,
      typeSpeed: 100,
      backSpeed: 100, // سرعة محو الحروف
      backDelay: 500,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="w-full h-lvh pt-7 flex flex-col justify-center text-center text-white">
      <main className="w-2/4 m-auto">
        <h2 className="text-5xl font-semibold my-5"> Hi, I’m Nehal Khaled</h2>
        <span className="text-6xl new">
          F<h1 className="inline-flex" ref={el}></h1>
        </span>

        <span className="text-2xl block mt-7">
          Welcome to my corner of the web!
        </span>
        <p className="text-xl mt-3">
        I’m a front-end developer passionate about crafting visually appealing and user-friendly digital experiences. Let’s team up to create a dynamic web experience!
        </p>
<a target="_blank" href="https://drive.google.com/file/d/1ejsmGIh5bjj7uEadSh6_FPDDURJ9i3f9/view?usp=drive_link">
<button className=" shadow-button rounded-xl p-3 mt-4">
          Download my CV
        </button></a>
       
        <div className="flex justify-center mt-5">
          <a target="_blank" href="https://www.linkedin.com/in/nehal-khaled19 ">
            <div className="mr-1 w-12 h-12 shadow-button border rounded-full flex items-center justify-center ">
              <i class="fa-brands fa-linkedin-in fa-xl"></i>
            </div>
          </a>
          <a target="_blank" href="https://github.com/nehalkhaled19">
            <div className="w-12 h-12 shadow-button border rounded-full flex items-center justify-center ">
              <i class="fa-brands fa-github fa-xl"></i>
            </div>
          </a>

          {/* <a target="_blank" href="mailto:nehalkhaled62@gmail.com">
            <div className="w-12 h-12 shadow-button border rounded-full flex items-center justify-center ">
            <i class="fa-brands fa-github fa-xl"></i></div>
          </a> */}
        </div>
      </main>
    </section>
  );
}
