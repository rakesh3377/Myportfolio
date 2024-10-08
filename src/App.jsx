import React, { useEffect } from "react";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
// import Particles from "./components/particles";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./components/contact";

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <div className="projects">
        <Projects />
        </div>
        <Skills />
        <Contact />
        {/* <Particles id="tsparticles" /> */}
      </div>
    </>
  );
}

export default App;
