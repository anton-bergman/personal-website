import "../styles/banner.css";
import BackgroundImage from "../res/personal-webiste-wallpaper.jpg";
import ProfileImage from "../res/profile-pic-personal-website.png";


function Banner() {

    return (
        <div className="banner" id="banner">
            <img id="banner-background" src={BackgroundImage} alt="Beautiful background"/>
            <div className="header">
                <div className="header-text">
                    <h1>Anton Bergman</h1>
                    <h4>Third year M.Sc student in Computer Science and Engineering.</h4>
                </div>
                <img id="profile-pic" src={ProfileImage} alt=""/>
            </div>
        </div>
    );
}

export default Banner;