import React from "react";
import "./stylecard.css";

import Imgplay from "./../../img/Play.svg";

export default function CardButtons() {
  return (
    <div className="card-button">
      <div className="container-fluid">
        <div className="row btn-play justify-content-md-center">
          <button type="button" className="btn btn-instrument">
            <img src={Imgplay} alt="ImgButtonOfandON" className="img-button-play" />
          </button>
        </div>
        <div className="row">
        <label for="customRange1" class="form-label">Velocidad</label>
<input type="range" class="form-range" id="customRange1"></input>
      
        </div>
        <div className="row">
        <label for="customRange1" class="form-label">volumen</label>
<input type="range" class="range" id="customRange1"></input>
      
        </div>
        <div className="row">
        <div className="col-6">
        <input class="form-control form-control-sm" type="text" placeholder="mb" aria-label=".form-control-sm example"></input>
        </div>
        <div className="col-6">
        <input class="form-control form-control-sm" type="text" placeholder="mb" aria-label=".form-control-sm example"></input>
        </div>
        
        
        </div>
        <div className="row">
        
        </div>
      </div>
    </div>
  );
}
