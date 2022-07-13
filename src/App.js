import React from "react";
import "./App.css";
//import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Componentes
import Layout from "./components/Menu/Layout";
import Home from "./pages/Home";
import PageTuner from "./pages/PageTuner";
import NotFound from "./pages/PageNotFound";
import Metronome from "./pages/PageMetronome"
import Composition from "./pages/PageComposition"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tuner" element={<PageTuner/>} />
          <Route exact path="/metronome" element={<Metronome/>} />
          <Route exact path="/composition" element={<Composition/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
