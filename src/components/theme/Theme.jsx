import React, { useState } from 'react';
import "./theme.css";

const Theme = () => {
  const [theme, setTheme] = useState(false);

  const myFunctheme = () => {
    var rootElement = document.getElementById("root");
    rootElement.classList.toggle("theme-2");
    var revElement = document.getElementById("rev");
    revElement.classList.toggle("og-theme");
    setTheme(!theme); // Toggle the theme state
  }

  return (
    <div className='boundary'>
      <button id="rev" className='theme__btn' onClick={myFunctheme}>
        {theme ? <i className="fa-regular fa-moon fa-lg"></i> : <i className="fa-regular fa-sun fa-lg"></i>}
      </button>
    </div>
  );
}

export default Theme;

