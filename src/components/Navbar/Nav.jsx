import React, { useState } from "react";
import "flowbite";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Nav() {
  const [en, setEN] = useState(true);
  const [dark, setDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleButton = () => {
    setEN(!en);
  };
  const toggleButtonDark = () => {
    setDark(!dark);
  };
    const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div>
      <nav class="px-3 z-50  md:px-0 fixed w-full justify-between align-middle py-5  bg-slate-800  bg-opacity-90 md:bg-opacity-30">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <h3 className="font-semibold text-3xl">Nehal Khaled</h3>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            <i
              onClick={toggleButtonDark}
              className={`fa-solid mx-4 fa-${dark ? "moon" : "sun"} fa-xl`}
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
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
          <ul className={`rounded-lg flex flex-col mt-4 text-center  transition-all duration-300 ease-in-out overflow-hidden font-semibold text-lg md:flex-row `}>
       {links?.map((e)=>{
        return <li className="text-left lg:shadow-button my-1 px-2 py-1  rounded-lg md:py-0">
        <a href={e.href}>{e.label}</a>
      </li>
       })}
      
      </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
