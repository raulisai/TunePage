import React from "react";
import { Link } from "react-router-dom";

import "./css/Navbar.css";
import logoPage from "../../img/LogoNoteCatch.png";
import ImgTuner from "../../img/Afinador-black.png";
import ImgMetronomo from "../../img/Metronomo.svg";
import ImgCompon from "../../img/composicion2-black.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link className="" to="/">
          <img className="Navbar-logo-principal" src={logoPage} alt="Logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 links-nav">
            <li class="nav-item">
              <Link className="Navbar__brand" to="tuner">
                
                <span className="font-weight-bold">Afinador</span>
                <img className="Navbar__brand-logo" src={ImgTuner} alt="Logo" />
              </Link>
            </li>
            <li class="nav-item">
              <Link className="Navbar__brand" to="metronome">
                
                <span className="font-weight-bold">Metronomo</span>
                <img className="Navbar__brand-logo" src={ImgMetronomo} alt="Logo" />
              </Link>
            </li>
            <li class="nav-item">
              <Link className="Navbar__brand" to="composition">
                
                <span className="font-weight-bold">Composicion</span>
                <img className="Navbar__brand-logo" src={ImgCompon} alt="Logo" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;


