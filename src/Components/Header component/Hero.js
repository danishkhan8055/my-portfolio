import "./Hero.css";
import profilephoto from "../../Assets/profilephoto.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

import React from 'react'

function Hero() {
  return (
    <>
      <div id="home" className="hero">
        <img src={profilephoto} alt="" />
        <h1><span>I am Danish Khan</span> , MERN Stack Devloper Based In India</h1>
        <p>I am a Full Stack developer from Indore (MP) fresher with six month training experience</p>
        <div className="hero-action">
            <div className="hero-connect">
             <AnchorLink className="button2" href="#contact" offset={50}> Connect With Me </AnchorLink>
              </div>
            <div className="resume">My Resume</div>
        </div>
      </div>
    </>
  )
}

export default Hero
