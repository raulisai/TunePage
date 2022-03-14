import React from "react";
import "./App.css";
//import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Componentes
import Layout from "./components/Menu/Layout";
import Home from "./pages/Home";
import Tuner from "./pages/Tuner";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tuner" element={<Tuner/>} />
          <Route component={NotFound} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
