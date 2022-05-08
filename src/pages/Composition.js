import React, { Component } from "react";
import notasArray from "../helpers/objects/noteArray";
import BorderNotas from "../helpers/objects/noteBorders";

import "./styles/Home.css";

import Tuner from "../components/Tuner/Nota";
import Trastes from "../components/TrastesInstrument/Trastes";

//React Redux
import { Provider } from "react-redux";
import store from "../helpers/redux/store";

export default class Composition extends Component {
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

    const findWaveLength = (e, r, t, o, n, a, i) => {
      let s = [];

      for (var u = 0, c = 0, l = 0, m = 0; m < e.length - 1; m++) {
        s.push(e[m]);
        for (var d = 1; i > d; d++) s.push(e[m] + ((e[m + 1] - e[m]) * d) / i);
      }
      s.push(e[e.length - 1]);
      r *= i;
      t *= i;
      for (var g = s.length, f = [], h = 0, w = 0, A = 0; t > d; d++) {
        if (Math.abs(s[d]) > h) {
          w = d;
          h = Math.abs(s[d]);
        }
        A += Math.abs(s[d]);
      }
      if (a > A / t) return -1;
      if (0 === w || w === t) return -1;
      for (
        var C = 0,
          D = 0,
          v = 0,
          y = 0,
          p = 0,
          T = 0,
          F = 0,
          b = 0,
          k = 0,
          d = r;
        t >= d;
        d++
      ) {
        F = 0;
        b = 0;
        C = 0;
        D = 0;
        for (var N = w; g > N; N += d) {
          F += s[N];
          if (0 !== b && g - 5 * i > N) {
            k = s[N] / s[w];
            if (k > 0) {
              if (k > 1) k = 1;
            }
          }
          u = s[N];
          l = s[N - 5 * i];
          c = s[N + 5 * i];

          if (s[w] >= 0) {
            if (u > c && u > l) {
              C += (k * k * k * k * s[w] * o * (t - d)) / t;
              D++;
            } else if (c > u && l > u) {
              C += (k * k * k * k * s[w] * o * (t - d)) / t;
              D++;
            }
          }
          b++;
          b >= n && (N = g);
        }
        F += (C * D) / b;
        F /= b;
        if (F > v) {
          v = F;
          p = d;
        } else if (y > F) {
          y = F;
          T = d;
          f.push(F);
        }
      }
      return s[w] >= 0 ? p / i : T / i;
    };

    function findNote(e) {
      if (254.285 >= e) {
        if (89.903 >= e) {
          for (var r = 0; 17 >= r; r++)
            if (e > BorderNotas[r][0] && e <= BorderNotas[r][1]) return r;
        } else
          for (r = 18; 35 >= r; r++)
            if (e > BorderNotas[r][0] && e <= BorderNotas[r][1]) return r;
      } else if (719.225 >= e) {
        for (r = 36; 53 >= r; r++)
          if (e > BorderNotas[r][0] && e <= BorderNotas[r][1]) return r;
      } else
        for (r = 54; 88 >= r; r++)
          if (e > BorderNotas[r][0] && e <= BorderNotas[r][1]) return r;
      return -1;
    }

    const GetWaveInHz = (fuente) => {
      let contextoDeAudio = new (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.AudioContext ||
        window.msAudioContext)();
      let datos_de_fuente = contextoDeAudio.createMediaStreamSource(fuente);

      // Nodo de audio.
      //console.log(contextoDeAudio);
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
          AumentoLevel = (notasArray[noteMusic][1] - Hz) * 100;
          DecrementoLevel = 0;
        } else {
          DecrementoLevel = (Hz - notasArray[noteMusic][1]) * 100;
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
          navigator.msGetUserMedia  ||
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
