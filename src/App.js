import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Resume/>
      <Services/>
      <Contact/>
      <Portfolio/>
    </div>
  );
}

export default App;



