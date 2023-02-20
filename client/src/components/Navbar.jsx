import { useState, useEffect } from "react";

import { Link, Events } from "react-scroll";

import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/navbar.css"

function Navbar() {

    const [toggle, setToggle] = useState("hidden");

    const showNavbar = () => {
        if (toggle === "hidden") {
            setToggle("visible")
        }
        else {setToggle("hidden")}
        
        console.log("toggle: " + toggle);
    };


    const [toggleNavbarState, setToggleState] = useState();

    const toggleState = (buttonType) => {
        setToggleState(buttonType);
        console.log("toggledState: " + buttonType);
    };


    const handleScroll = (e) => {
        //console.log('Scroll: ' + window.pageYOffset);

        const aboutMeComp = document.getElementById('about-me');
        const offsetAboutMe = -300;

        const myExperienceComp = document.getElementById('my-experience');
        //const offsetMyExperience = -75;
        const offsetMyExperience = -200;

        const contactMeComp = document.getElementById('contact-me');
        //const offsetContactMe = -75;
        const offsetContactMe = -200;

        /*console.log("AboutMeComp offsetTop: " + aboutMeComp.offsetTop);
        console.log("AboutMeComp offsetHeight: " + aboutMeComp.offsetHeight);

        console.log("MyExperience offsetTop: " + myExperienceComp.offsetTop);
        console.log("MyEcperience offsetHeight: " + myExperienceComp.offsetHeight);*/

        if (window.pageYOffset < aboutMeComp.offsetTop + offsetAboutMe) {
            //console.log("Home")
            //setToggleState("home");
            toggleState("home");
            //setScrolledToTarget(true);
        }
        else if (window.pageYOffset < (myExperienceComp.offsetTop + offsetMyExperience) && window.pageYOffset >= aboutMeComp.offsetTop + offsetAboutMe) {
            //console.log("About Me")
            toggleState("about");
            //setScrolledToTarget(true);
        }
        else if (window.pageYOffset < (contactMeComp.offsetTop + offsetContactMe) && window.pageYOffset >= myExperienceComp.offsetTop + offsetMyExperience) {
            //console.log("My Experience")
            toggleState("experience");
            //setScrolledToTarget(true);
        }
        else if (window.pageYOffset >= contactMeComp.offsetTop + offsetContactMe) {
            //console.log("Contact Me")
            toggleState("contact");
            //setScrolledToTarget(true);
        }
    }

    useEffect(() => {
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
                    to="my-experience" 
                    spy={true} 
                    smooth={true} 
                    offset={-75} 
                    duration={500}
                    className="menu-btn"
                    id={toggleNavbarState === "experience" ? "menu-btn-active" : ""}>
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