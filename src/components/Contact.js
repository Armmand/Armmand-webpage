import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>If you'd like to work together or learn more, feel free to reach out!</p>

        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:your.email@example.com">alston.armmand@gmail.com</a></p>
        </div>

        {/* Optional form for styling/future expansion */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" disabled>Send Message</button>
          <p className="note">* Form coming soon. For now, please email me directly.</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
