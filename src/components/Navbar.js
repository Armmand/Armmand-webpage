import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../images/logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const [headlines, setHeadlines] = useState([]);
  const [sportsUpdates, setSportsUpdates] = useState([]);
  const [weather, setWeather] = useState("");

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLinkClick = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  

  // Fetch Sports Updates
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328`)
      .then((res) => res.json())
      .then((data) => {
        const updates = data.events.slice(0, 5).map((event) => (
          `${event.strEvent} (${event.dateEvent})`
        ));
        setSportsUpdates(updates);
      });
  }, []);

  // Fetch Weather
  useEffect(() => {
    const city = "";
    const state = "";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&units=imperial&appid=b9fed19d15348977df9327198a44abf3`
    )
    
      .then((res) => res.json())
      .then((data) => {
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        setWeather(`🌤️ ${temp}°F ${city} - ${description}`);
      })
      .catch((err) => {
        setWeather("Weather unavailable");
      });
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#home">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#resume" onClick={handleLinkClick}>Resume</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#portfolio" onClick={handleLinkClick}>Portfolio</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div className="breaking-news">
        <div className="breaking-news-content">
          <span className="weather">{weather}</span>
          <span className="time">{currentTime}</span>
          <span className="news">
            <marquee behavior="scroll" direction="left" scrollamount="6">
              {[
                ...headlines.slice(0, 5),
                ...sportsUpdates.slice(0, 5)
              ].join(" • ")}
            </marquee>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
