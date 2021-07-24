import './App.css';
//import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
//React Redux 
import { Provider } from "react-redux";
import store from "./helpers/redux/store";

import Tuner from "./components/Tuner/MainTuner"

//Componentes


function App() {

  //const [show, setShow] = useState(false);

 

  return (
    <Provider store={store}>
    <div className="App container">
    <div className="row">
    <div className="col-12">
    <Tuner />
    </div>
    </div>

    </div>
    </Provider>
  );
}

export default App;
