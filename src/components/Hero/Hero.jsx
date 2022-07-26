import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 2 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="left">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "160px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in Gwalior</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/*figure */}
        <div className="figure">
          <div>
            <span>+140 </span>
            <span>expert coaches </span>
          </div>
          <div>
            <span>+978 </span>
            <span>member joined </span>
          </div>
          <div>
            <span>+50 </span>
            <span>fitness programs </span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="/" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/* hero image */}
        <img src={hero_image} alt="/" className="hero-image" />
        <img src={hero_image_back} alt="/" className="hero-image-back" />
        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="/" />
          <div>
            <span>Calories Burn</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
