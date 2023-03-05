import React from "react";
import logo from ".//phishing_pole.png";

const Menu = () => {
  return (
    <div className="menu">
      <img src={logo} alt="app logo"/>
      <div className="menu-title">Phishing Pole</div>
      <div className="menu-item">Dark Mode</div>
      <div className="menu-item">FAQs</div>
      <div className="menu-item">Clear Data</div>
    </div>
  );
  
};

export default Menu;
