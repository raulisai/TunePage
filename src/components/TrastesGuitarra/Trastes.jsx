/* eslint-disable no-useless-constructor */
import React from "react";
import { connect } from "react-redux";

//componentes

import {GetWaveInHz} from '../../helpers/redux/reducers/actionTuner/GetWaveInHz'

class Trastes extends React.Component {
    constructor(props) {
        super(props);
      }
       start = () =>{
        getUserMedia({audio: {
                    noiseSuppression: !1,
                    echoCancellation: !0
                }}, GetWaveInHz);
    
        function error() {
          alert('Falló la generación de la cadena de Audio. Utilizas chrome o Safari?');
      }
    
        function getUserMedia(medio, llamada) {
          try {
          navigator.getUserMedia = 
                navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia;
              navigator.getUserMedia(medio, llamada, error);
          } catch (e) {
              alert('Nos aprarece algún error en la toma de entrada de micrófono... :' + e);
          }
      }
    
      }
    

    render() {
        return (
            <>
            <div className="row BotonesTuner">
            <div className="col-4">
            <button type="button" class="btn btn-success" onClick={() => this.start() }>Activar</button>
            </div>
            <div className="col-4">
            <button type="button" class="btn btn-info">Settings</button>
            </div>
            <div className="col-4">
            <button type="button" class="btn btn-danger">stop</button>
            </div>
            </div>
            </>
        )
    }
}

Trastes.propTypes = {
    
};

const mapStateToProps = (state) =>  {
    return {
        
    };
}

export default connect(mapStateToProps)(Trastes);
