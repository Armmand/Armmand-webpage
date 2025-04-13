import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import captureImg from "../images/projects/capture.PNG";
import gappImg from "../images/projects/Gapp.PNG";



const projects = [
  {
    title: "Cleanest Fade Barbershop App",
    image: captureImg,
    link: "https://example.com/inventory-system",
  },
  {
    title: "Custom Disaster Alert App",
    image: gappImg,
    link: "https://example.com/business-site",
  },
  {
    title: "React Portfolio",
    image: "",
    link: "https://example.com/react-portfolio",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-carousel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-item"
              >
                <img src={project.image} alt={project.title} />
                <div className="portfolio-title">{project.title}</div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Portfolio;

