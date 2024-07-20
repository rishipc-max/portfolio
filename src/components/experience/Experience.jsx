import React from 'react';
import "./experience.css";
import Data from './Data';
import Card from './Card';

const Experience = () => {
  const educationData = Data.filter(val => val.category === "education");
  const experienceData = Data.filter(val => val.category === "experience");

  return (
    <section className='resume container section' id='experience'>
      <h2 className="section__title">Experience</h2>
      
      <div className="resume__container grid">
        <div className="timeline grid">
          {educationData.map((val, id) => (
            <Card 
              key={id} 
              icon={val.icon} 
              title={val.title} 
              year={val.year} 
              desc={val.desc}
            />
          ))}
        </div>
        
        <div className="timeline grid">
          {experienceData.map((val, id) => (
            <Card 
              key={id + educationData.length} 
              icon={val.icon} 
              title={val.title} 
              year={val.year} 
              desc={val.desc}
            />
          ))}
        </div>
      </div>
    </section> 
  );
}

export default Experience;