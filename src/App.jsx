import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ParticlesComponent from "./components/Particles/Particles";
import About from "./components/About/About";
import { useEffect } from "react";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "animate.css";

export default function App() {
  return (
    <div className="bg">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects/>
      <Contact/>
      <ParticlesComponent />
    </div>
  );
}
