import { useState, useEffect } from "react";

import { Link } from "react-scroll";

import {FaBars, FaTimes} from "react-icons/fa";
import {FaFacebookSquare, FaLinkedin, FaGithub} from "react-icons/fa";
import "../styles/navbar.css"

function Navbar() {

    const [toggle, setToggle] = useState("hidden");

    const showNavbar = () => {
        if (toggle === "visible") {
            setToggle("hidden")
        }
        else {setToggle("visible")}
    };


    const [toggleNavbarState, setToggleState] = useState();

    const toggleState = (buttonType) => {
        setToggleState(buttonType);
        showNavbar();
        console.log("toggle: " + toggle);
    };

    useEffect(() => {

        const handleScroll = (e) => {

            const aboutMeComp = document.getElementById('about-me');
            const offsetAboutMe = -300;
    
            const projectComp = document.getElementById('projects');
            const offsetProject = -200;
    
            const contactMeComp = document.getElementById('contact-me');
            const offsetContactMe = -200;
    
            if (window.pageYOffset < aboutMeComp.offsetTop + offsetAboutMe) {
                toggleState("home");
            }
            else if (window.pageYOffset < (projectComp.offsetTop + offsetProject) && 
                window.pageYOffset >= aboutMeComp.offsetTop + offsetAboutMe) {
    
                toggleState("about");
            }
            else if (window.pageYOffset < (contactMeComp.offsetTop + offsetContactMe) &&
                window.pageYOffset >= projectComp.offsetTop + offsetProject) {
    
                toggleState("projects");
            }
            else if (window.pageYOffset >= contactMeComp.offsetTop + offsetContactMe) {
                toggleState("contact");
            }
        }

        const listener = (event) => handleScroll(event, toggleState());
        window.addEventListener('scroll', listener);
    
        return () => {
          window.removeEventListener('scroll', listener);
        };
      }, []);
    

    return (
        <header>
            <h3>A N T O N    B E R G M A N</h3>
            <nav className={toggle}>
                <Link 
                    to="banner" 
                    spy={true} 
                    smooth={true} 
                    offset={-75} 
                    duration={500} 
                    className="menu-btn" 
                    id={toggleNavbarState === "home" ? "menu-btn-active" : ""}>
                    {/*onClick={() => toggleState("home")} */}
                    HOME
                    <div className="underline"></div>
                </Link>
                <Link 
                    to="about-me" 
                    spy={true} 
                    smooth={true} 
                    offset={-300} 
                    duration={500} 
                    className="menu-btn"
                    id={toggleNavbarState === "about" ? "menu-btn-active" : ""}>
                    {/*onClick={() => toggleState("about")} */}
                    ABOUT ME
                    <div className="underline"></div>
                </Link>
                <Link 
                    to="projects" 
                    spy={true} 
                    smooth={true} 
                    offset={-75} 
                    duration={500}
                    className="menu-btn"
                    id={toggleNavbarState === "projects" ? "menu-btn-active" : ""}>
                    {/*onClick={() => toggleState("experience")} */}
                    EXPERIENCE
                    <div className="underline"></div>
                </Link>
                <Link 
                    to="contact-me" 
                    spy={true} smooth={true} 
                    offset={-75} 
                    duration={500} 
                    className="menu-btn"
                    id={toggleNavbarState === "contact" ? "menu-btn-active" : ""}
                    onClick={() => toggleState("contact")}>
                    CONTACT
                    <div className="underline"></div>
                </Link>

                <div className="navbar-icon-container">
                    <a href='https://www.facebook.com/anton.bergman.54966/' target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
                    <a href='https://linkedin.com/in/-anton-bergman-' target="_blank" rel="noreferrer"><FaLinkedin/></a>
                    <a href='https://github.com/anton-bergman' target="_blank" rel="noreferrer"><FaGithub/></a>
                </div>

                

                <button className="menu-btn nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="menu-btn nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;