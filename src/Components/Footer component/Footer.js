


import "./Footer.css";
import { FaUser , FaGithub , FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <p>I'm FullStack Developer from , India with Six Month training experience</p>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left"> © Danish Khan . All right reserved</p>
            <div className="footer-bottom-right">
                <p><a href="https://github.com/DanuU8055" target="#blank"><FaGithub/></a></p>
                <p><a href="https://www.linkedin.com/in/danish-khan-94758a296/" target="#blank"><FaLinkedin/></a></p>
                <p>Connect with me</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
