import "./Nav.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";



const Nav = () =>{
    const [select , setSelect ] = useState("home")
    return (
        <>
        <div className="navbar">
            <div className="heading">
                <span>Code <strong>DanY</strong></span>
            </div>
            
        <ul className="nav-menu">
            
            <AnchorLink className="anchorlink" href="#home" offset={50}>
                  <li onClick={()=> setSelect("home")}> Home {select==="home"? <hr/> : <></>}</li>
            </AnchorLink >

            <AnchorLink className="anchorlink" href ="#about" offset={50}>
                 <li onClick={()=> setSelect("about")}>About {select==="about"? <hr/> : <></>}</li>
            </AnchorLink >
            
            
            <AnchorLink className="anchorlink" href="#contact" offset={50}>
                   <li onClick={()=> setSelect("contact")}>Contact {select==="contact"? <hr/> : <></>}</li>
            </AnchorLink >
            
        </ul>
        
        {/* <div className="font-div">
             <FaYoutube />
             <FaGithub/>
             <FaInstagramSquare/>
        </div> */}
        <div className="nav-connect">
          <AnchorLink className="button" href="#contact" offset={50}>  Connect with me </AnchorLink>
        </div>
        </div>
        </>
    )
}

export default Nav;