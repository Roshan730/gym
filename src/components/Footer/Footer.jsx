import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="/" />
          <img src={Instagram} alt="/" />
          <img src={LinkedIn} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
