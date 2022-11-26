import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
//import platziconfLogoImage from '../images/platziconf-logo.svg';
import Image from '../img/logoDjokerSinFondo.svg';
import Image2 from '../img/gtClassic.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={Image}
                alt="Logo"
                className="img-fluid mb-2"
              />
              <span className="">Herramientas musicales</span>
              <h1>NOTE CATCH</h1>
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={Image2}
                alt="Astronauts"
                className="img-fluid p-4"
              />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
