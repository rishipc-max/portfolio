import React from 'react';
import "./about.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";



const AboutBox = () => {
   
  return (
    <div className="about__boxes grid" >

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeOut"
      >       
        <div className="about__box">
           <i className="skill__icon fa-brands fa-html5" style={{color: "#ff6600"}}></i>        
         <div className="stack-details">
           <span className="title">HTML 5</span>
           <span>Structure and Content</span>
         </div>
        </div>
      </AnimatedOnScroll>
        
      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeOut"
      >  
        <div className="about__box">
          <i className="skill__icon fa-brands fa-css3-alt " style={{color: "#0008fa"}}></i>        
          <div className="stack-details">
            <span className="title">CSS 3</span>
            <span>Visual Styling</span>
          </div>
        </div>
      </AnimatedOnScroll> 

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeInOut"
      >
        <div className="about__box">
         <i className="skill__icon fa-brands fa-js" style={{color: "#FFD43B"}} ></i>        
         <div className="stack-details">
           <span className="title">JavaScript</span>
           <span>Functionality</span>
          </div>
        </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeInOut"
      >
       <div className="about__box">
         <i className="skill__icon fa-brands fa-github"></i>        
         <div className="stack-details">
           <span className="title">GitHub</span>
           <span>Version Control</span>
         </div>
       </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeInOut"
      >
        <div className="about__box secondDiv">
         <i className="skill__icon fa-brands fa-react" style={{color: "#a3d7ff"}} ></i>
         <div className="stack-details">
           <span className="title">React.Js</span>
           <span>Dynamic Development</span>
         </div>
        </div>
      </AnimatedOnScroll> 

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeInOut"
      >
        <div className="about__box secondDiv">
          <i className="skill__icon fa-brands fa-node-js" style={{color: "#36ab61"}}></i>        
          <div className="stack-details">
           <span className="title">Node.js</span>
           <span>server-side proxy</span>
          </div>
        </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeInOut"
      >  
        <div className="about__box secondDiv">
        
          <div>
        <img className='skill__icon' src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' alt='Redux Logo' width='55'></img>
        </div>
              
         <div className="stack-details">
           <span className="title">Redux</span>
           <span>State Management</span>
          </div>
        </div>
      </AnimatedOnScroll> 

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeInOut"
      >
        <div className="about__box secondDiv">
        <img className='skill__icon' src='https://www.svgrepo.com/show/331488/mongodb.svg' alt='Redux Logo' width='55'></img>
          <div className="stack-details">
           <span className="title">MongoDB</span>
           <span>Database</span>
          </div>
        </div>
      </AnimatedOnScroll>

    </div>
 
  )
}

export default AboutBox


