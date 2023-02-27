import React from 'react';

import { useState } from "react";

import "../styles/projects.css";
import project1Image from "../res/personalkollen-img.webp";
import personalWebsiteImage from "../res/personal-website-img.webp";
import kmmProjectImage from "../res/kmm-img.webp";
import pacmanProjectImage from "../res/pacman-project.webp";
import tetrisProjectImage from "../res/tetris-project.webp";

function Projects() {

    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div className="project-container" id='projects'>
            <h1 id="my-projects-header">My Projects</h1>

            <div className="project-list" id={toggle === true ? "project-list-visible" : "project-list-hidden"}>

                <a className="github-repo-link" href='https://github.com/orgs/PUM-05/repositories' target="_blank" rel="noreferrer">
                    <div className="project-card visible">
                        <div className='project-image-container'>
                            <img className="project-image" src={project1Image} alt=""/>
                        </div>
                        <div className='project-text-container'>
                            <h1 className='project-name'>Bachelor Thesis</h1>
                            <h6 className='project-text'>
                            Currently working on a full-stack web development project
                            for Personalkollen, building a CRM-service from scratch
                            as part of my Bachelor’s thesis.
                            </h6>
                            <h6 className='tech-header'>Tech used:</h6>
                            <ul className='tool-list'>
                                <li className='tool'>React</li>
                                <li className='tool'>JavaScript</li>
                                <li className='tool'>Django</li>
                                <li className='tool'>Python</li>
                                <li className='tool'>PostgreSQL</li>
                            </ul>
                        </div>
                    </div>
                </a>
                
                <a className="github-repo-link" href="https://github.com/anton-bergman/personal-website" target="_blank" rel="noreferrer">
                    <div className="project-card visible">
                        <div className='project-image-container'>
                            <img className="project-image" src={personalWebsiteImage} alt=""/>
                        </div>
                        <div className='project-text-container'>
                            <h1 className='project-name'>Personal Portfolio</h1>
                            <h6 className='project-text'>
                            Building my personal portfolio website as a showcase of my
                            skills, experience and projects. It has allowed me to learn
                            about web development technologies, UI/UX design, and gained
                            hands-on experience.
                            </h6>
                            <h6 className='tech-header'>Tech used:</h6>
                            <ul className='tool-list'>
                                <li className='tool'>React</li>
                                <li className='tool'>JavaScript</li>
                                <li className='tool'>NodeJS</li>
                                <li className='tool'>Express</li>
                                <li className='tool'>CSS</li>
                                <li className='tool'>Figma</li>
                            </ul>
                        </div>
                    </div>
                </a>

                <a className="github-repo-link" href='https://github.com/shamillimbasiya/TSEA29-Autonomous-Race-Car' target="_blank" rel="noreferrer">
                    <div className={toggle === true ? "project-card visible" : "project-card hidden"}>
                        <div className='project-image-container'>
                            <img className="project-image" src={kmmProjectImage} alt=""/>
                        </div>
                        <div className='project-text-container'>
                            <h1 className='project-name'>Autonomous RC Car</h1>
                            <h6 className='project-text'>
                            I have developed an autonomous
                            self-driving RC car utilizing Raspberry Pi, AVR microcontrollers,
                            LIDAR and various sensors. I was involved in the full development
                            cycle from design to implementation with development in C/C++ and
                            Python.
                            </h6>
                            <h6 className='tech-header'>Tech used:</h6>
                            <ul className='tool-list'>
                                <li className='tool'>Raspberry Pi</li>
                                <li className='tool'>AVR Microcontroller</li>
                                <li className='tool'>C/C++</li>
                                <li className='tool'>Python</li>
                                <li className='tool'>LIDAR</li>
                                <li className='tool'>Sockets</li>
                                <li className='tool'>SPI bus</li>
                                <li className='tool'>Control engineering</li>
                            </ul>
                        </div>
                    </div>
                </a>

                <a className="github-repo-link" href='https://github.com/anton-bergman/pacman' target="_blank" rel="noreferrer">
                    <div className={toggle === true ? "project-card visible" : "project-card hidden"}>
                        <div className='project-image-container'>
                            <img className="project-image" src={pacmanProjectImage} alt=""/>
                        </div>
                        <div className='project-text-container'>
                            <h1 className='project-name'>Pacman</h1>
                            <h6 className='project-text'>
                            I created a version of the classic game Pac-Man in Java. 
                            Using various programming concepts such as object-oriented
                            programming, event handling, and collision detection. Through
                            this project, I honed my Java programming skills and gained
                            experience in game development, problem-solving, and critical
                            thinking.
                            </h6>
                            <h6 className='tech-header'>Tech used:</h6>
                            <ul className='tool-list'>
                                <li className='tool'>Java</li>
                            </ul>
                        </div>
                    </div>
                </a>

                <a className="github-repo-link" href='https://github.com/anton-bergman/tetris' target="_blank" rel="noreferrer">
                    <div className={toggle === true ? "project-card visible" : "project-card hidden"}>
                        <div className='project-image-container'>
                            <img className="project-image" src={tetrisProjectImage} alt=""/>
                        </div>
                        <div className='project-text-container'>
                            <h1 className='project-name'>Tetris</h1>
                            <h6 className='project-text'>
                            I developed a Java implementation of the classic game Tetris.
                            This project involved designing and implementing the game
                            mechanics and graphics.The game also includes levels with
                            increasing difficulty and high score tracking. This project
                            helped me improve my Java programming skills and gave me
                            experience in creating a complete software application from
                            scratch.
                            </h6>
                            <h6 className='tech-header'>Tech used:</h6>
                            <ul className='tool-list'>
                                <li className='tool'>Java</li>
                            </ul>
                        </div>
                    </div>
                </a>
                <button className="show-close-btn" id="more-projects-btn" onClick={handleClick}>
                    {!toggle ? "View More" : "View Less"}
                </button>
            </div>
        </div>
    )
}

export default Projects;
