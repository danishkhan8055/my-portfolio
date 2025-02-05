import "./About.css";
import profilephoto from "../../Assets/profilephoto.jpg";

import React from 'react'

function About() {
  return (
    <>
      <div id="about" className="about">
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profilephoto} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Fresher Full Stack Developer.Profeciency in React JS with Six Month of training Experience </p>
                    <p>Leveraged the expertise of senior developers to enhance technical skills and understanding of complex concepts,promoting contionous learning and profesional growth</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Html & Css </p><hr style={{width : "50%"}}></hr>
                        </div>
                    <div className="about-skill">

                        <p>React JS </p><hr style={{width : "70%"}}></hr>
                        </div>
                    <div className="about-skill">

                        <p>JavaScript </p><hr style={{width : "60%"}}></hr>
                        </div>
                    <div className="about-skill">

                        <p>Node JS  </p><hr style={{width : "55%"}}></hr>
                        </div>
                        <div className="about-skill">

                        <p>Express JS  </p><hr style={{width : "45%"}}></hr>
                        </div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>
                    1+
                </h1>
                <p>
                    Years of Practice Experience
                </p>
            </div>
            <div className="about-achievement">
                <h1>
                    2+
                </h1>
                <p>
                    Project Completed
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
