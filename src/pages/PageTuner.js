import React, { Component } from "react";
import notasArray from "../helpers/objects/noteArray";
//style
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
    };
  }

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
      }, 900);

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

  render() {
    return (
      <Provider store={store}>
        <div className="App container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>Tuner</h1>
            </div>
          </div>
          <div className="row BotonesTuner">
            <div className="col-4">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.start()}
              >
                Activar
              </button>
            </div>
            <div className="col-4">
              <button type="button" className="btn btn-info">
                Settings
              </button>
            </div>
            <div className="col-4">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.setState({ Activo: !this.state.Activo })}
              >
                stop
              </button>
            </div>
          </div>
          <div className="row TunerAndGuitar">
            <div className="col-1">
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
            <div className="col-11">
              <Trastes notaMusic={this.state.notaTraste} />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
