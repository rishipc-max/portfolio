import React, { useState } from 'react';
import "./theme.css";


const Theme = () => {

  const [theme, setTheme] = useState(false); 

 function myFunctheme() {
 var element = document.getElementById("root");
 element.classList.toggle("theme-2");
 var element = document.getElementById("rev");
 element.classList.toggle("og-theme");
 }

  return (
    <div className='boundary'onClick={() => setTheme(!theme)}><button id="rev" className='theme__btn' onClick={myFunctheme}>
    {theme ? <i class="fa-regular fa-moon fa-lg"></i> : <i class="fa-regular fa-sun fa-lg"></i>}
   </button></div> 
  )
}

export default Theme