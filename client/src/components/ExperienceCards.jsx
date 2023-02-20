import "../styles/experience_cards.css";

import {MdOutlineWeb, MdVideogameAsset, MdBookmarks} from "react-icons/md";

function ExperienceCards() {
    return (
        <div className="experience-container" id="my-experience">
            <h1 id="experience-header">My Experience</h1>

            <div className="card-container">
                <div className="card" id="left-card">
                    <i className="experience-icon">
                        <MdOutlineWeb/>
                    </i>
                    <h3 className="card-header">Web Development</h3>
                    <button className="read-more-btn">Read More</button>
                </div>
                <div className="card" id="middle-card">
                    <i className="experience-icon">
                        <MdVideogameAsset/>
                    </i>
                    <h3 className="card-header">Game Development</h3>
                    <button className="read-more-btn">Read More</button>
                </div>
                <div className="card" id="right-card">
                    <i className="experience-icon">
                        <MdBookmarks/>
                    </i>
                    <h3 className="card-header">Projects</h3>
                    <button className="read-more-btn">Read More</button>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCards;