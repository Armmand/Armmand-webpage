import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="section-title">Services Offered</h2>

      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Modern, responsive websites built with the latest technologies to showcase your brand or business online.</p>
        </div>

        <div className="service-card">
          <h3>App Development</h3>
          <p>Custom mobile and web applications tailored to meet your unique business needs and user experience goals.</p>
        </div>

        <div className="service-card">
          <h3>Cyber Security</h3>
          <p>Protect your business with top-notch cybersecurity solutions, audits, and risk management strategies.</p>
        </div>

        <div className="service-card">
          <h3>IT Consultation</h3>
          <p>Expert advice to optimize your technology infrastructure and align it with your business objectives.</p>
        </div>

        <div className="service-card">
          <h3>End User Support</h3>
          <p>Reliable support services to assist users with technical issues, system usage, and troubleshooting.</p>
        </div>
      </div>

      <div className="more-button">
        {/*<button>see more &gt;</button> */}
      </div>
    </section>
  );
}

export default Services;
