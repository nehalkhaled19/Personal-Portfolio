import React, { useState } from "react";
// import "./Navbar.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import './Nav.jsx'
import Nav from "./Nav.jsx";


export default function Navbar() {
  // const [en, setEN] = useState(true);
  // const [dark, setDark] = useState(true);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const links = [
  //   { href: "#home", label: "Home" },
  //   { href: "#about", label: "About" },
  //   { href: "#services", label: "Services" },
  //   { href: "#contact", label: "Contact" },
  // ];
  // const toggleButton = () => {
  //   setEN(!en);
  // };
  // const toggleButtonDark = () => {
  //   setDark(!dark);
  // };
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };  
  return(
<Nav/>
  )
}
