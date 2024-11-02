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
    <nav className="fixed w-full flex text-white justify-between align-middle p-5 px-20 bg-neutral-800 bg-opacity-20">
      <div>
        <h3 className="font-semibold text-3xl text-white">Nehal</h3>
      </div>

      <ul className="flex align-middle mt-2">
        <li className="mx-2 p-0 my-0">
          <a href="">Home</a>
        </li>
        <li className="mx-2 ">
          <a href="">About</a>
        </li>
        <li className="mx-2 ">
          <a href="">Skills</a>
        </li>
        <li className="mx-2 ">
          <a href="">Services</a>
        </li>
        <li className="mx-2 ">
          <a href="">Contact</a>
        </li>
      </ul>

      <div>
        <button
          className="mr-5 relative overflow-hidden language-switch rounded-md mt-1 border border-b-gray-100 p-1 text-zinc-400"
          onClick={toggleButton}
        >
          <span className={`fi ${en ? "fi-eg" : "fi-us"} mr-1`}></span>
          <i>{en ? "ar" : "en"}</i>
        </button>

        <i onClick={toggleButtonDark} class={`fa-solid fa-${ dark? 'moon' :'sun'} fa-xl text-white`}></i>
      </div>
    </nav>
  );
}
