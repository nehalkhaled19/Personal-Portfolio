import React, { useState } from "react";
import "./Navbar.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Navbar() {
  const [en, setEN] = useState(true);
  const [dark, setDark] = useState(true);

  const toggleButton = () => {
    setEN(!en);
  };
  const toggleButtonDark = () => {
    setDark(!dark);
  };
  return (
    <nav className="fixed w-full font-semibold justify-between align-middle py-5  bg-neutral-800 bg-opacity-20">
      
      <main className=" w-5/6 flex justify-between align-middle m-auto "><div>
        <h3 className="text-3xl">Nehal Khaled</h3>
      </div>

      <ul className="flex align-middle mt-2  text-lg">
        <li className="mx-2 p-0 my-0">
          <a href="#home">Home</a>
        </li>
        <li className="mx-2 ">
          <a href="#about">About</a>
        </li>
        <li className="mx-2 ">
          <a href="#skills">Skills</a>
        </li>
        <li className="mx-2 ">
          <a href="#services">Services</a>
        </li>
        <li className="mx-2 ">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div>
        <button
          className="mr-5 p-2 border border-bg-gray-100 overflow-hidden shadow-button rounded-md mt-1  "
          onClick={toggleButton}
        >
          <span className={`fi ${en ? "fi-eg" : "fi-us"} mr-1`}></span>
          <i>{en ? "ar" : "en"}</i>
        </button>

        <i onClick={toggleButtonDark} className={`fa-solid fa-${ dark? 'moon' :'sun'} fa-xl`}></i>
      </div>
      </main>
    </nav>
  );
}
