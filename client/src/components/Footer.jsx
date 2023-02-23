import React from 'react'
import "../styles/footer.css"

import {FaFacebookSquare, FaLinkedin, FaGithub} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <h3 id="footer-name">A N T O N    B E R G M A N</h3>
      <div className="icon-container">
        <a href='https://www.facebook.com/anton.bergman.54966/' target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
        <a href='https://linkedin.com/in/-anton-bergman-' target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href='https://github.com/anton-bergman' target="_blank" rel="noreferrer"><FaGithub/></a>
      </div>
    </div>
  )
}

export default Footer;