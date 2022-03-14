import {GetWaveInHz} from '../../helpers/redux/reducers/actionTuner/GetWaveInHz'

export const start = () =>{
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