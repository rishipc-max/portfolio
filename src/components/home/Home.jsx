import React from 'react';
import "./home.css";
import Me from "../../assets/me.png"
import Headersocials from './Headersocials';
import Scrolldown from './Scrolldown';
// import Shapes from './Shapes';


const Home = () => {
  return (
  <div className="as">
   
<section className="home container " id="home">
      <div className="intro">
      <img className='home__img' src={Me} alt="" />
      
      <h1 className='home__name'>Rishi Patel</h1>
      <span className="home__education">I'm a full stack developer</span>
      
      <br />
      
     
      <Headersocials/>
      <a href="#contact" className="btn">Hire Me</a>
      
    
      <Scrolldown/>
      </div>
       {/* <Shapes/>  */}
    </section>
    
  </div>

    
  )
}

export default Home