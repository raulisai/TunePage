import React from 'react';
import { Link } from 'react-router-dom';

import './css/Navbar.css';
import logo from '../../img/logoDjokerSinFondo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Home</span>
            <span className="font-weight-bold">Music</span>
          </Link>
          <Link className="Navbar__brand" to="tuner">
            <span className="font-weight-bold">Tuner</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
