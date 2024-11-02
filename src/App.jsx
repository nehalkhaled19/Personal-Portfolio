import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ParticlesComponent from "./components/Particles/Particles";
import About from "./components/About/About";



const App = () => {
  return (
    <div className="do">
      <Navbar/>
      <Home/>
      <About/>
      <ParticlesComponent/>
    </div>
  );
};

export default App;
