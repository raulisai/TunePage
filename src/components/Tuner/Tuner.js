import React, { Component } from "react";

//style
import "./styles/Home.css";
//components
import Nota from "../components/Tuner/Nota";
//React Redux
import { Provider } from "react-redux";
import store from "../helpers/redux/store";



export default class PTuner extends Component {
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


  render() {
    return (
      <Provider store={store}>
        <div className="">
          
              <Nota
                notaMusic={this.state.Nota}
                OctvNota={this.state.OctvNota}
                Hz={this.state.Hz}
                NotaLeft={this.state.NotaLeft}
                NotaRight={this.state.NotaRight}
                levelPositivoNote={this.state.LevelPositivoNote}
                levelNegativeNote={this.state.LevelNegativeNote}
              />
            
        </div>
      </Provider>
    );
  }
}
