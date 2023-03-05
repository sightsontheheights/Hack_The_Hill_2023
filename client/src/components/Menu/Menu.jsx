import React, {useState} from "react";
import myImg from '../../logo.png';

const Menu = (image) => {
  const [mode, setModeText] = useState('Dark Mode')

  const setTheme = (themeName) => {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  };

  function handleDarkMode () {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
      setModeText("Dark Mode")
    } else {
      setTheme('theme-dark');
      setModeText("Light Mode")
    }
  };

  (function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
    } else {
      setTheme('theme-light');
    }
  })();

  return (
    <div className="menu">

      <img src={myImg} width={"150px"} className="menu-logo"></img>
      <div className="menu-title">Phishing Pole</div>
      <div className="menu-item" onClick={handleDarkMode}><a>{mode}</a></div>
      <div className="menu-item">FAQs</div>
      <div className="menu-item">Clear Data</div>
    </div>
  );
  
};

export default Menu;