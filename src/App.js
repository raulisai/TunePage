import './App.css';
//import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
//React Redux 
import { Provider } from "react-redux";
import store from "./helpers/redux/store";

import Tuner from "./components/Tuner/MainTuner"
import Trastes from './components/TrastesGuitarra/Trastes';

//Componentes


function App() {

  //const [show, setShow] = useState(false);

 

  return (
    <Provider store={store}>
    <div className="App container-fluid">
    <div className="row">
    <div className="col-12">
    <h1>Tuner</h1>
    </div>
    </div>
    <div className="row TunerAndGuitar">
    <div className="col-3">
    <Tuner />
    </div>
    <div className="col-9">
    <Trastes />
    </div>
    </div>

    </div>
    </Provider>
  );
}

export default App;
