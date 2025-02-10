import "./Nav.css";
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef, useState } from "react";



const Nav = () =>{
    const [select , setSelect ] = useState("home")
    const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.right="0";
    }
    const closeMenu = () =>{
        menuRef.current.style.right="-350px"
    }
    return (
        <>
        <div className="navbar">
            <div className="heading">
                <span>Code <strong>DanY</strong></span>
                <CiMenuBurger className="nav-mob-open" onClick={openMenu}/>
            </div>
                
            
        <ul className="nav-menu" ref={menuRef}> 
            <MdCancel className="nav-mob-close" onClick={closeMenu}/>
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
        
        <div className="nav-connect">
          <AnchorLink className="button" href="#contact" offset={50}>  Connect with me </AnchorLink>
        </div>
        </div>
        </>
    )
}

export default Nav;