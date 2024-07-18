import React from "react";
import "./footer.css"; // Assuming you have a CSS file for styling
import Headersocials from "../home/Headersocials";
import Nl from "./Nl";

const Footer = () => {
  return (
    <section className="footer">
      <hr className="hr" />
      <div className="section container footer__container">
        <div className="footer__contact-me">
          <h4 className="footer__title1">Contact Me &#128241; </h4>
          <p className="pp">+91 9664743040</p>
          <p className="pp">rishiipatel@gmail.com</p>
        </div>
        <div className="footer__follow-me" ss>
          <h4 className="footer__title2">Follow Me &#128151;</h4>
          <div className="ssss">
            <Headersocials />
          </div>
        </div>
        <div className="footer__subscribe-me">
          <h4 className="footer__title3">
            Sign Up To My Newsletter <span className="heartene">&#128140;</span>{" "}
          </h4>
          <Nl />
        </div>
      </div>

      <p className="copyrite"> &copy; Rishi Patel</p>
    </section>
  );
};

export default Footer;
