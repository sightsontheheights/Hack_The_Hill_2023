import React from "react";
import myImg from '../../logo.png';
const Menu = (image) => {
  //console.log(logo);
  return (
    <div className="menu">

      <img src={myImg} width={"150px"}></img>
      <div className="menu-title">Phishing Pole</div>
      <div className="menu-item">Dark Mode</div>
      <div className="menu-item">FAQs</div>
      <div className="menu-item">Clear Data</div>
    </div>
  );
  
};

export default Menu;