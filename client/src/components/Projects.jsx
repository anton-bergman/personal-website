import React from 'react';

import { useState } from "react";

import {FaTimes} from "react-icons/fa";

import "../styles/projects.css";
import project1Image from "../res/personalkollen-img.png";

function Projects() {

    const [display, setDisplay] = useState("project-list-hidden");

    const handleClick = () => {
        if (display === "project-list-hidden") {
            setDisplay("project-list-visible");
        }
        else {
            setDisplay("project-list-hidden");
        }
        console.log("display: " + display);
    };

    return (
        <div className="project-container">
            <button className="show-close-btn" onClick={handleClick}>Show projects</button>
            <div className="project-list" id={display}>
                <div className="project-card">
                    <div className='project-image-container'>
                        <img className="project-image" src={project1Image}/>
                    </div>
                    <div className='project-text-container'>
                        <h1 className='project-name'>Bachelor Thesis</h1>
                        <h6 className='project-text'>
                        For my Bachelors Thesis, I was part of a project group
                        consisting of 10 people that together build a Customer
                        Relations Management-system for Personalkollen.
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
                <div className="project-card">
                    <div className='project-image-container'>
                        <img className="project-image" src={project1Image}/>
                    </div>
                    <div className='project-text-container'>
                        <h1 className='project-name'>Bachelor Thesis</h1>
                        <h6 className='project-text'>
                        For my Bachelors Thesis, I was part of a project group
                        consisting of 10 people that together build a Customer
                        Relations Management-system for Personalkollen.
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
                <div className="project-card">
                    <div className='project-image-container'>
                        <img className="project-image" src={project1Image}/>
                    </div>
                    <div className='project-text-container'>
                        <h1 className='project-name'>Bachelor Thesis</h1>
                        <h6 className='project-text'>
                        For my Bachelors Thesis, I was part of a project group
                        consisting of 10 people that together build a Customer
                        Relations Management-system for Personalkollen.
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
                <button className="show-close-btn" id="close-projects-btn" onClick={handleClick}><FaTimes/></button>
            </div>
        </div>
    )
}

export default Projects;
