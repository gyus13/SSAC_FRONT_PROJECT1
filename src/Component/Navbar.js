import './Navbar.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div className="navigation">
            <div className="logo">
                <a className="no-underline" href="#">
                    군침이 SSAC
                </a>
            </div>
            <div className="navigation-search-container">
            <FontAwesomeIcon icon={faSearch} className="search" />

                <input className="search-field" type="text" placeholder="Search"></input>
                <div className ="search-container">
                <div className ="search-container-box">
                <div className ="search-results">

                </div>
                </div>
                </div>
            </div>

            <div class="navigation-icons">
              <a href="#" target ="_blank" class="navigation-link">
              <FontAwesomeIcon icon={faHome} className="icon home" />
              </a>
              <a class="navigation-link notifica">
              <FontAwesomeIcon icon={faHome} className="icon home" />
                  <div class="notification-bubble-wrapper">
                    <div class="notification-bubble">
                      <span class="notifications-count">99</span>
                    </div>
                  </div>
              </a>
              <a href="#" class="navigation-link">
              <FontAwesomeIcon icon={faHome} className="icon home" />
              </a>
              <a href="#" id="signout" class="navigation-link">
              </a>
            </div>
        </div>
    )
}

export default Navbar;