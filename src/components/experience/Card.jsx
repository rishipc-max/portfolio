import React from 'react';
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Card = (props) => {
  return (
    <div className='timeline__item'>
      <i className={props.icon}></i>
      <AnimatedOnScroll
       animationIn="fadeInUp"
       // animationOut="fadeInOut"
       >
      <span className="timeline__data">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <p className="timeline__text">{props.desc}</p>
      </AnimatedOnScroll>
    
    </div>
  )
}

export default Card