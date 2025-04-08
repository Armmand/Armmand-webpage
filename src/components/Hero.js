import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-content">

        {/* Image Row */}
        <div className="hero-images">
         
          <img src="/photo2.jpg" alt="Photo 2" />
        
        </div>

        <h1>Armmand Alston</h1>
        <p>
          I'm a passionate IT professional dedicated to helping others by
          providing effective solutions, exceptional customer service, and
          reliable support from North Carolina
        </p>

        <div className="social-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-skype"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </header>
  );
}

export default Hero;

