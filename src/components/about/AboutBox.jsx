import React from 'react';
import "./about.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";



const AboutBox = () => {
   
  return (
    // <div className="about__boxes grid">
    //     <div className="about__box">
    //         <i className='about__icon icon-fire'></i>
    //         <div>
    //             <h3 className="about__title">15</h3>
    //             <span className="about__subtitle">Projects Completed</span>
    //         </div>
    //     </div>
    //     <div className="about__box">
    //         <i className='about__icon icon-cup'></i>
    //         <div>
    //             <h3 className="about__title">322</h3>
    //             <span className="about__subtitle">Cup of Coffee</span>
    //         </div>
    //     </div>

    //     <div className="about__box">
    //         <i className='about__icon icon-people'></i>
    //         <div>
    //             <h3 className="about__title">13</h3>
    //             <span className="about__subtitle">Lorem Ipsum</span>
    //         </div>
    //     </div>

    //     <div className="about__box">
    //         <i className='about__icon icon-badge'></i>
    //         <div>
    //             <h3 className="about__title">3</h3>
    //             <span className="about__subtitle">Nominees Winner</span>
    //         </div>
    //     </div> 

        
    // </div>
    
    <div className="about__boxes grid" >

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeOut"
      >       
        <div className="about__box">
           <i className="skill__icon fa-brands fa-html5" style={{color: "#ff6600"}}></i>        
         <div class="stack-details">
           <span class="title">HTML 5</span>
           <span>Structure and Content</span>
         </div>
        </div>
      </AnimatedOnScroll>
        
      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeOut"
      >  
        <div className="about__box">
          <i class="skill__icon fa-brands fa-css3-alt " style={{color: "#0008fa"}}></i>        
          <div class="stack-details">
            <span class="title">CSS 3</span>
            <span>Visual Styling</span>
          </div>
        </div>
      </AnimatedOnScroll> 

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeInOut"
      >
        <div className="about__box">
         <i class="skill__icon fa-brands fa-js" style={{color: "#FFD43B"}} ></i>        
         <div class="stack-details">
           <span class="title">JavaScript</span>
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
         <div class="stack-details">
           <span class="title">GitHub</span>
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
         <div class="stack-details">
           <span class="title">React.Js</span>
           <span>Dynamic Development</span>
         </div>
        </div>
      </AnimatedOnScroll> 

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeInOut"
      >
        <div className="about__box secondDiv">
          <i class="skill__icon fa-brands fa-node-js" style={{color: "#36ab61"}}></i>        
          <div class="stack-details">
           <span class="title">Node.js</span>
           <span>Version Control</span>
          </div>
        </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeInOut"
      >  
        <div className="about__box secondDiv">
        
         <i class="skill__icon fa-brands fa-js" style={{color: "#FFD43B"}} ></i>        
         <div class="stack-details">
           <span class="title">GitHub</span>
           <span>Version Control</span>
          </div>
        </div>
      </AnimatedOnScroll> 

      <AnimatedOnScroll
        animationIn="fadeInUp"
        // animationOut="fadeInOut"
      >
        <div className="about__box secondDiv">
          <i class="skill__icon fa-brands fa-js" style={{color: "#FFD43B"}} ></i>        
          <div class="stack-details">
           <span class="title">GitHub</span>
           <span>Version Control</span>
          </div>
        </div>
      </AnimatedOnScroll>

    </div>
 
  )
}

export default AboutBox


