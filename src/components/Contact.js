import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7dzdhxp",
        "template_fx14o6h",
        form.current,
        "7846cbVEPoySc2cyL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>If you'd like to work together or learn more, feel free to reach out!</p>

        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:alston.armmand@gmail.com">alston.armmand@gmail.com</a>
          </p>
        </div>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
          {submitted && <p className="note">✅ Message sent! I’ll get back to you soon.</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;

