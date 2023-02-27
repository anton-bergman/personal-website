import "../styles/me_card.css";
import AboutMeImage from "../res/alperna-img.webp";

import ProfileImage from "../res/profile-pic-personal-website.webp"
import {FaFacebookSquare, FaLinkedin, FaGithub} from "react-icons/fa";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL_WWW;


function MeCard() {

    const handleDownload = () => {

        // Make a GET request to the server to download the PDF resume
        fetch(BACKEND_URL + '/resume', { method: 'GET' })
          .then(response => response.blob())
          .then(blob => {
            // Create a URL to the blob and trigger a download in the browser
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'resume.pdf';
            link.click();
          })
          .catch(error => console.error(error));
      };

    return (
        <div className="background" id="about-me">
            <div className="me-card">
                <div className="img-container">
                    <img className="me-img" src={AboutMeImage} alt=""/>
                </div>

                
                <div className="image-container-phone">
                    <img id="profile-image-phone" src={ProfileImage} alt=""/>
                    <div className="icon-container-phone">
                        <a id="linkedin-link" href='https://linkedin.com/in/-anton-bergman-' target="_blank" rel="noreferrer"><FaLinkedin/></a>
                        <a id="github-link" href='https://github.com/anton-bergman' target="_blank" rel="noreferrer"><FaGithub/></a>
                    </div>
                </div>
                
                <div className="about-me-container">
                    <div className="about-me-text">
                        <h1 id="header">About Me</h1>
                        <h6 id="text">
                        I am a third-year Computer Science and Engineering student, 
                        eager to kickstart my career and combine my studies with practical 
                        experience. I have a solid foundation in software development as well
                        as experience with project management. I am a quick learner and a team
                        player with a passion for technology and problem-solving.
                        </h6>
                    </div>
                    <button id="resume-btn" onClick={handleDownload}>Download Resume</button>
                </div>
            </div>
            
        </div>
    );
}

export default MeCard;