import "./Navigation.css";
import { faPen, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navigation = () =>{
    return (
        <div className="navigation">
          
            <div className="logo">
                <a href="#!" className="no-underline">
                    군침이 SSAC
                </a>
            </div>
          
            <div className="navigation-search-container">
                <FontAwesomeIcon icon={faSearch} className="search" />
                <input className="search-field" type="text" placeholder="Search"></input>
                <div className="search-container">
                    <div className="search-container-box">
                        <div className="search-results"></div>
                    </div>
                </div>
            </div>
          
            <div className="navigation-icons">
                <a href="#!" target ="_blank" className="navigation-link">
                <FontAwesomeIcon icon={faHome} className="fas fa-home" />
                </a>
                <a href="#!" className="navigation-link notifica">
                <FontAwesomeIcon icon={faPen} className="fas fa-pen" />
                    <div className="notification-bubble-wrapper">
                        <div className="notification-bubble">
                        <span className="notifications-count">99</span>
                        </div>
                    </div>
                </a>
                <a href="#!" className="navigation-link">
                <FontAwesomeIcon icon={faEnvelope} className="fas fa-envelope"></FontAwesomeIcon>
                </a>
                <a href="#!" id="signout" className="navigation-link">
                </a>
            </div>
        
        </div>
    )
}

export default Navigation;