import React from "react";
import "./about.css";
import Aboutavt from "../../assets/myavatar.png";
import AboutBox from "./AboutBox";
import "animate.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const About = () => {
  function showAllSkills() {
    const element = document.getElementById('toggleBtn');
    var elms = document.getElementsByClassName("secondDiv");
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";
        element.style.display = "none";
      } else {
        x.style.display = "none";
        element.style.display = "block";
      }
    });
  }


  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img className="myavt" src={Aboutavt} alt="" />

        <div className="about__data grid">
          <div className="about__info">
            <AnimatedOnScroll
              animationIn="slideInUp"
              //  animationOut="fadeOut"
            >
              <p className="about__description">
                I am always eager to learn new web technologies, I create web
                layouts, cool templates and make them alive in the web browser.
              </p>
            </AnimatedOnScroll>

            <AnimatedOnScroll
              animationIn="slideInUp"
              //  animationOut="fadeInOut"
            >
              <a
                href="https://drive.google.com/file/d/1ihjh346wknMhnDHz6NLgS3KQ7xNDj-es/view?usp=sharing"
                className="btn"
              >
                Download Resume
              </a>
            </AnimatedOnScroll>
          </div>
          <AnimatedOnScroll
            animationIn="slideInUp"
            //  animationOut="fadeInOut"
          >
            <div className="about__skills grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Javascript</h3>
                  <span className="skills__number ">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage bar__js"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React.js</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage bar__react"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">node.js</h3>
                  <span className="skills__number">50%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage bar__node"></span>
                </div>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
      {/* <AnimatedOnScroll
          animationIn="fadeIn"
          animationOut="fadeInOut"
      > */}

      <AboutBox />
      {/* </AnimatedOnScroll> */}
      <button className="btn all-skills__btn" onClick={showAllSkills} id="toggleBtn">
        Show All Skills
      </button>
    </section>
  );
};

export default About;
