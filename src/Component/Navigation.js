import "./Navigation.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    <i className="fas fa-home"></i>
                </a>
                <a href="#!" className="navigation-link notifica">
                    <i className="far fa-sticky-note"></i>
                    <div className="notification-bubble-wrapper">
                        <div className="notification-bubble">
                        <span className="notifications-count">99</span>
                        </div>
                    </div>
                </a>
                <a href="#!" className="navigation-link">
                    <i className="far fa-envelope"></i>
                </a>
                <a href="#!" id="signout" className="navigation-link">
                </a>
            </div>
        
        </div>
    )
}

export default Navigation;