import React, { Component } from "react";
import "./styles/Metronome.css";

import MetronomeComponent from '../components/Metronomo/Metronomo'
import CardButtoons from '../components/ButtonMetronome/CardButtons'

export default class Metronome extends Component {
  render() {
    return (
      <div className="container-fluid container-principal">
        <div className="row">
          <div className="col-md-6 col-lg-6">
          <CardButtoons/>
          </div>
          <div className="col-md-6 col-lg-6">
            <MetronomeComponent/>
          </div>
        </div>
      </div>
    );
  }
}
