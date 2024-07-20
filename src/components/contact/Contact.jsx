import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's Talk About Everything!</h3>
          <p className="contact__details">Send me an email</p>
        </div>

        <form
          action="https://formspree.io/f/mvoekljp"
          method="POST"
          className="contact__form"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                id="name"
                name="username"
                className="contact__form-input"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                id="email"
                name="email"
                className="contact__form-input"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              id="subject"
              name="subject"
              className="contact__form-input"
              placeholder="Your Subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              id="message"
              name="message"
              className="contact__form-input special-case"
              cols="30"
              rows="10"
              placeholder="Write your message"
              required
              style={{paddingTop:'1.2rem'}}
            ></textarea>
          </div>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
