import "./Footer.css";
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <p>I'm FullStack Developer from , India with Six Month training experience</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                  <FaUser/>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left"> © Danish Khan . All right reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
