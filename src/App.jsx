import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ParticlesComponent from "./components/Particles/Particles";
import About from "./components/About/About";
import { useEffect } from "react";
import Skills from "./components/Skills/Skills"

export default function App() {
  return (
    <div className="bg">
            <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <ParticlesComponent/>
    </div>
  )
}
