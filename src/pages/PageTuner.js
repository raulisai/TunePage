import React, { Component } from "react";
import notasArray from "../helpers/objects/noteArray";
//style
import "./styles/pageTuner.css";
import "./styles/Home.css";
//components
import Tuner from "../components/Tuner/Nota";
import Trastes from "../components/TrastesInstrument/Trastes";
//React Redux
import { Provider } from "react-redux";
import store from "../helpers/redux/store";
//functions
import findWaveLength from "../helpers/services/FindWaveLength";
import findNote from "../helpers/services/FindNote";

import ImgButtOff from "../img/ButtonOn.png";
import ImgButtSettings from "../img/AjustesBlanco.png";
import ImgButtInstruments from "../img/Instrumentos2.png";
import ImgButtMicrofono from "../img/MicrofonoBlanco.png";
import ImgButtBajo from "../img/Bajo.png";
import ImgButtGuitar from "../img/Guitarra.png";
import ImgButtCello from "../img/Cello.png";
import Pentagrama from "../img/Pentagrama.svg"

export default class PageTuner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Activo: false,
      Nota: String,
      NotaLeft: String,
      NotaRight: String,
      Hz: String,
      noteMusicBuffer: 6,
      LevelPositivoNote: 0,
      LevelNegativeNote: 0,
      ButInstStatus: true,
    };
  }
  ButInstuments = "row seccionInstumentsOcult";

  start = () => {
    this.setState({ Activo: true });

    const GetWaveInHz = (fuente) => {
      let contextoDeAudio = new (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.AudioContext ||
        window.msAudioContext)();
      let datos_de_fuente = contextoDeAudio.createMediaStreamSource(fuente);

      let analizador = contextoDeAudio.createAnalyser();
      let bitCounter = contextoDeAudio.sampleRate;
      datos_de_fuente.connect(analizador);
      let timeDomainData = new Float32Array(analizador.fftSize);

      window.globk = 1;

      if (contextoDeAudio.sampleRate > 160000) {
        window.globk = 4;
      } else if (contextoDeAudio.sampleRate > 90000) {
        window.globk = 2;
      }
      analizador.fftSize = window.globk * 4096;
      analizador.smoothingTimeConstant = 0;

      let notaFull;
      let nota;
      let OtvNota;
      let noteLeft;
      let noteRight;
      let Hz;

      const InicializarInterval = setInterval(() => {
        analizador.getFloatTimeDomainData(timeDomainData);

        Hz =
          bitCounter /
          findWaveLength(
            timeDomainData,
            window.globk * 24,
            window.globk * 1200,
            10,
            10,
            0.016,
            Math.ceil(10 / window.globk)
          );
        let noteMusic = findNote(Hz);
        if (noteMusic === -1) {
          noteMusic = this.state.noteMusicBuffer;
          Hz = this.state.Hz;
        }
        notaFull = notasArray[noteMusic][0];

        OtvNota = notaFull[notaFull.length - 1];
        nota = notaFull.substring(0, notaFull.length - 1);
        noteLeft = notasArray[noteMusic - 1][0];
        noteRight = notasArray[noteMusic + 1][0];
        //Obtener Niveles
        let AumentoLevel = 0;
        let DecrementoLevel = 0;
        if (Hz === notasArray[noteMusic][1]) {
        }
        if (Hz < notasArray[noteMusic][1]) {
          AumentoLevel = (notasArray[noteMusic][1] - Hz) * 45;
          DecrementoLevel = 0;
        } else {
          DecrementoLevel = (Hz - notasArray[noteMusic][1]) * 45;
          AumentoLevel = 0;
        }

        this.setState({
          notaTraste: notaFull,
          Nota: nota,
          OctvNota: OtvNota,
          Hz: Number.parseFloat(Hz).toFixed(2),
          NotaLeft: noteLeft,
          NotaRight: noteRight,
          noteMusicBuffer: noteMusic,
          LevelPositivoNote: AumentoLevel,
          LevelNegativeNote: DecrementoLevel,
        });
        if (this.state.Activo === false) {
          clearInterval(InicializarInterval);
        }
      }, 100);

      return Hz;
    };

    getUserMedia(
      {
        audio: {
          noiseSuppression: !1,
          echoCancellation: !0,
        },
      },
      GetWaveInHz
    );

    function error() {
      alert(
        "Falló la generación de la cadena de Audio. Utilizas chrome o Safari?"
      );
    }

    function getUserMedia(medio, llamada) {
      try {
        navigator.getUserMedia =
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.msGetUserMedia ||
          navigator.mozGetUserMedia;
        navigator.getUserMedia(medio, llamada, error);
      } catch (e) {
        alert(
          "Nos aprarece algún error en la toma de entrada de micrófono... :" + e
        );
      }
    }
  };
  selectInstrument = () => {
    this.setState({ ButInstStatus: !this.state.ButInstStatus });

    if (this.state.ButInstStatus) {
      this.ButInstuments = "row seccionInstuments";
    } else {
      this.ButInstuments = "row seccionInstumentsOcult";
    }
  };
  changeInstument = () => {};

  render() {
    return (
      <Provider store={store}>
        <div className="App container-fluid principal-conteiner">
          <div className="row">
            <div className="col-12">
              <h1>Tuner</h1>
            </div>
          </div>
          <div className="row Secction-Principal">
            <div className="col-md-2 ">
              <div className="seccionButton">
                <div className={this.ButInstuments}>
                  <button
                    type="button"
                    className="btn btn-instrument"
                    onClick={() => this.changeInstument()}
                    disabled={this.state.ButInstStatus}
                  >
                    <img
                      src={ImgButtBajo}
                      alt="ImgButtonOfandON"
                      className="img-button"
                    />
                  </button>
                  <button
                    type="button"
                    className="btn btn-instrument"
                    onClick={() => this.changeInstument()}
                    disabled={this.state.ButInstStatus}
                  >
                    <img
                      src={ImgButtGuitar}
                      alt="ImgButtonOfandON"
                      className="img-button"
                    />
                  </button>
                  <button
                    type="button"
                    className="btn btn-instrument"
                    onClick={() => this.changeInstument()}
                    disabled={this.state.ButInstStatus}
                  >
                    <img
                      src={ImgButtCello}
                      alt="ImgButtonOfandON"
                      className="img-button"
                    />
                  </button>
                </div>
                <div className="row">
                  <button
                    type="button"
                    className="btn btn-inicio"
                    onClick={() => this.selectInstrument()}
                  >
                    <img
                      src={ImgButtInstruments}
                      alt="ImgButtonOfandON"
                      className="img-button"
                    />
                  </button>
                </div>
                <div className="row">
                  <button
                    type="button"
                    className="btn btn-inicio"
                    onClick={() => this.start()}
                  >
                    <img
                      src={ImgButtOff}
                      alt="ImgButtonOfandON"
                      className="img-button"
                    />
                  </button>
                  <button
                    type="button"
                    className="btn btn-inicio"
                    onClick={() => this.start()}
                  >
                    <img
                      src={ImgButtMicrofono}
                      alt="ImgButtonOfandON"
                      className="img-button"
                    />
                  </button>
                </div>
                <div className="row">
                  <button
                    type="button"
                    className="btn btn-inicio"
                    onClick={() =>
                      this.setState({ Activo: !this.state.Activo })
                    }
                  >
                    <img
                      src={ImgButtSettings}
                      alt="ImgButtonOfandON"
                      className="img-button"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-10 Instrument-select-guitar">
            <div className="row seccion-inf">
            <h3>informacion</h3>
            
            </div>
              <div className="row seccion-instrument">
                <div className="col-md-2 tuner">
                  <Tuner
                    notaMusic={this.state.Nota}
                    OctvNota={this.state.OctvNota}
                    Hz={this.state.Hz}
                    NotaLeft={this.state.NotaLeft}
                    NotaRight={this.state.NotaRight}
                    levelPositivoNote={this.state.LevelPositivoNote}
                    levelNegativeNote={this.state.LevelNegativeNote}
                  />
                </div>
                <div className="col-md-10 trastes">
                  <Trastes notaMusic={this.state.notaTraste} />
                </div>
              </div>
              <div className="row">
              <img
                      src={Pentagrama}
                      alt="ImgButtonOfandON"
                      className="Pentagrama"
                    />
              
              </div>
            </div>
          </div>
          <div className="row Secction-Partitura"></div>
        </div>
      </Provider>
    );
  }
}
