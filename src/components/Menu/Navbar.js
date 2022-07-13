import React from 'react';
import { Link } from 'react-router-dom';

import './css/Navbar.css';
import logoHome from '../../img/LogoBlanco.png';
import ImgTuner from '../../img/Afinador.svg';
import ImgMetronomo from '../../img/Metromo-Blanco-SVG.svg';
import ImgCompon from '../../img/Composición2.png';


class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logoHome} alt="Logo" />
            <span className="font-weight-light">Introduccion </span>
            <span className="font-weight-bold">Musical</span>
          </Link>
          <Link className="Navbar__brand" to="tuner">
          <img className="Navbar__brand-logo" src={ImgTuner} alt="Logo" />
            <span className="font-weight-bold">Afinador</span>
          </Link>
          <Link className="Navbar__brand" to="metronome">
          <img className="Navbar__brand-logo" src={ImgMetronomo} alt="Logo" />
          <span className="font-weight-bold">Metronomo</span>
        </Link>
        <Link className="Navbar__brand" to="composition">
        <img className="Navbar__brand-logo" src={ImgCompon} alt="Logo" />
        <span className="font-weight-bold">Composicion</span>
      </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
