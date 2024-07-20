import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
// import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Theme from './components/theme/Theme';
import Footer from './components/footer/Footer';


function App() {
  
  return (
    <>
     <Sidebar />
     <Theme />
      <main className='main'>
        <Home />
        <About /> 
        <Experience />
        <Portfolio/>
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
