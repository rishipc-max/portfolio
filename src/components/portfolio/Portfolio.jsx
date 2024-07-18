import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';
import { AnimatedOnScroll } from "react-animated-css-onscroll";




const Portfolio = () => {
 
 const [items,setItems] = useState(Menu);
 const filterItem = (categoryItem) => {
  const updatedItems = Menu.filter((curElem) => {
    return curElem.category === categoryItem;
   });

   setItems(updatedItems);
 }

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>
      
      <AnimatedOnScroll
       animationIn="fadeInUp"
      // animationOut="fadeInOut"
      >
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={() => filterItem("Creative")}>Creative</span>
        <span className="work__item" onClick={() => filterItem("Art")} >Art</span>
        <span className="work__item" onClick={() => filterItem("Design")}>Design</span>
      </div>
      </AnimatedOnScroll>

      <div className="work__container grid">
             
        {   items.map((elem)=> {
            const{ id, image, title, category} = elem;
            return (
              <AnimatedOnScroll
              animationIn="fadeInUp"
              // animationOut="fadeInOut"
              >
              <div className="work__card" key={id}>
                <div className="work__thumbnail">
                  <img src={image} alt="" className="work__img" />
                  <div className="work__mask"></div>
                </div>

                <span className="work__category">{category}</span>
                <h3 className="work__title">{title}</h3>
                <a href="/" className="work__button">
                  <i className="icon-link work__button-icon"></i>
                </a>
                <a href="/" className="more__detail">
                  <i className="icon-link work__button-icon"></i>
                </a>
              </div>
              </AnimatedOnScroll>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio