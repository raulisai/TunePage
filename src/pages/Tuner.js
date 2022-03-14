import React, { Component,useState  } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";

import Tuner from "../components/Tuner/Nota";
import Trastes from "../components/TrastesGuitarra/Trastes";

//React Redux
import { Provider } from "react-redux";
import store from "../helpers/redux/store";



export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");

    this.state = {
      data: [],
      Activo: false,
      Nota: String
    };
  }

  start = () => {
    this.setState({ Activo: true  })

    const findWaveLength = (e, r, t, o, n, a, i) => {
      let s = [];

      for (var u = 0, c = 0, l = 0, m = 0; m < e.length - 1; m++) {
        s.push(e[m]);
        for (var d = 1; i > d; d++) s.push(e[m] + ((e[m + 1] - e[m]) * d) / i);
      }
      s.push(e[e.length - 1]);
      r *= i;
      t *= i;
      for (var g = s.length, f = [], h = 0, w = 0, A = 0, d = 0; t > d; d++) {
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
      let noteBorders = [
        [31.786, 33.676],
        [33.676, 35.678],
        [35.678, 37.8],
        [37.8, 40.047],
        [40.047, 42.429],
        [42.429, 44.952],
        [44.952, 47.624],
        [47.624, 50.456],
        [50.456, 53.457],
        [53.457, 56.635],
        [56.635, 60.003],
        [60.003, 63.571],
        [63.571, 67.351],
        [67.351, 71.356],
        [71.356, 75.599],
        [75.599, 80.095],
        [80.095, 84.857],
        [84.857, 89.903],
        [89.903, 95.249],
        [95.249, 100.915],
        [100.915, 106.915],
        [106.915, 113.27],
        [113.27, 120.005],
        [120.005, 127.14],
        [127.14, 134.7],
        [134.7, 142.71],
        [142.71, 151.195],
        [151.195, 160.185],
        [160.185, 169.71],
        [169.71, 179.805],
        [179.805, 190.5],
        [190.5, 201.825],
        [201.825, 213.825],
        [213.825, 226.54],
        [226.54, 240.01],
        [240.01, 254.285],
        [254.285, 269.405],
        [269.405, 285.42],
        [285.42, 302.395],
        [302.395, 320.38],
        [320.38, 339.43],
        [339.43, 359.61],
        [359.61, 380.995],
        [380.995, 403.65],
        [403.65, 427.65],
        [427.65, 453.08],
        [453.08, 480.02],
        [480.02, 508.565],
        [508.565, 538.81],
        [538.81, 570.85],
        [570.85, 604.79],
        [604.79, 640.755],
        [640.755, 678.86],
        [678.86, 719.225],
        [719.225, 761.99],
        [761.99, 807.3],
        [807.3, 855.305],
        [855.305, 906.165],
        [906.165, 960.05],
        [960.05, 1017.135],
        [1017.135, 1077.6],
        [1077.6, 1141.7],
        [1141.7, 1209.6],
        [1209.6, 1281.5],
        [1281.5, 1357.7],
        [1357.7, 1438.45],
        [1438.45, 1524],
        [1524, 1614.6],
        [1614.6, 1710.6],
        [1710.6, 1812.35],
        [1812.35, 1920.1],
        [1920.1, 2034.25],
      ];
      if (254.285 >= e) {
        if (89.903 >= e) {
          for (var r = 0; 17 >= r; r++)
            if (e > noteBorders[r][0] && e <= noteBorders[r][1]) return r;
        } else
          for (r = 18; 35 >= r; r++)
            if (e > noteBorders[r][0] && e <= noteBorders[r][1]) return r;
      } else if (719.225 >= e) {
        for (r = 36; 53 >= r; r++)
          if (e > noteBorders[r][0] && e <= noteBorders[r][1]) return r;
      } else
        for (r = 54; 71 >= r; r++)
          if (e > noteBorders[r][0] && e <= noteBorders[r][1]) return r;
      return -1;
    }

    const GetWaveInHz = (fuente) => {
      let contextoDeAudio = new (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext)();
      let datos_de_fuente = contextoDeAudio.createMediaStreamSource(fuente);

      let noteArray = [
        "C1",
        "C1#",
        "D1",
        "D1#",
        "E1",
        "F1",
        "F1#",
        "G1",
        "G1#",
        "A1",
        "A1#",
        "B1",
        "C2",
        "C2#",
        "D2",
        "D2#",
        "E2",
        "F2",
        "F2#",
        "G2",
        "G2#",
        "A2",
        "A2#",
        "B2",
        "C3",
        "C3#",
        "D3",
        "D3#",
        "E3",
        "F3",
        "F3#",
        "G3",
        "G3#",
        "A3",
        "A3#",
        "B3",
        "C4",
        "C4#",
        "D4",
        "D4#",
        "E4",
        "F4",
        "F4#",
        "G4",
        "G4#",
        "A4",
        "A4#",
        "B4",
        "C5",
        "C5#",
        "D5",
        "D5#",
        "E5",
        "F5",
        "F5#",
        "G5",
        "G5#",
        "A5",
        "A5#",
        "B5",
        "C6",
        "C6#",
        "D6",
        "D6#",
        "E6",
        "F6",
        "F6#",
        "G6",
        "G6#",
        "A6",
        "A6#",
        "B6",
        "C7",
        "C7#",
        "D7",
        "D7#",
        "E7",
        "F7",
        "F7#",
        "G7",
        "G7#",
        "A7",
        "A7#",
        "B7",
      ];

      // Nodo de audio.
      console.log(contextoDeAudio);
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

      let Hz =
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

      // console.log(Hz)

      const InicializarInterval = setInterval(() => {
        analizador.getFloatTimeDomainData(timeDomainData);
        let Hz =
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
        let wave = findWaveLength(
          timeDomainData,
          window.globk * 24,
          window.globk * 1200,
          10,
          10,
          0.016,
          Math.ceil(10 / window.globk)
        );
        let noteMusic = findNote(Hz);
        this.setState({ Nota: noteArray[noteMusic]  })
       // console.log("hz --> " + Hz);
        //console.log("wave ---> " + wave);
        console.log("Nota: " + noteArray[noteMusic]);
        if(this.state.Activo === false) 
        {
            clearInterval(InicializarInterval);
        }
      }, 1500);

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
                class="btn btn-success"
                onClick={() => this.start()}
              >
                Activar
              </button>
            </div>
            <div className="col-4">
              <button type="button" class="btn btn-info">
                Settings
              </button>
            </div>
            <div className="col-4">
              <button type="button" class="btn btn-danger" 
              onClick={() => this.setState({ Activo: !this.state.Activo  })}>
                stop
              </button>
            </div>
          </div>
          <div className="row TunerAndGuitar">
            <div className="col-3">
              <Tuner 
              notaMusic= {this.state.Nota}/>
            </div>
            <div className="col-9">
              <Trastes />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
