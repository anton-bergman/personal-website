import React from 'react'
import "../styles/footer.css"

import {FaFacebookSquare, FaLinkedin, FaGithub} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <h3 id="footer-name">A N T O N    B E R G M A N</h3>
      <div className="icon-container">
        <a href='https://www.facebook.com/anton.bergman.54966/' target="_blank"><FaFacebookSquare/></a>
        <a href='https://linkedin.com/in/-anton-bergman-' target="_blank"><FaLinkedin/></a>
        <a href='https://github.com/anton-bergman' target="_blank"><FaGithub/></a>
      </div>
    </div>
  )
}

export default Footer;