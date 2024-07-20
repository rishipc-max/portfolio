import React from "react";
import "./footer.css";
import Headersocials from "../home/Headersocials";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="section-footer container">
        <div>
          <h4>Contact Me 📱</h4>
          <div style={{paddingLeft:0}}>
          <p>+91 9664743040</p>
          <p>riship102002@gmail.com</p>
          </div>
          
        </div>
        <div>
          <h4>Follow Me 💗</h4>
          
            <Headersocials />
          
        </div>
        <div>
          <h4>
            Sign Up To My Newsletter <span className="heartene">💌</span>{" "}
          </h4>
          
            <form
            className="main-form"
              action="https://gmail.us9.list-manage.com/subscribe/post?u=a1fe6b966f09af6cdf2c16697&amp;id=a18a5a1261&amp;f_id=002c2be1f0"
              method="POST"
            >
              <div style={{paddingLeft:0}} className="form-group">
                <input
                  style={{width:'90%'}}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="footer-input-email"
                />
                <input type="submit" value="Subscribe" className="footer-input-submit" />
              </div>
            </form>
         
        </div>
      </div>
        <div className="copyright-footer">
          <span >&copy; Rishi Patel, 2024</span>
        </div>
    </div>
  );
};

export default Footer;