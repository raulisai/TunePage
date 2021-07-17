import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [newTaskName, setnewTaskName] = useState("");



  useEffect(() => {
    console.log('useEffect no dependency');
    Tuner()
    return () => {
        console.log('cleanup useEffect no dependenct');
        Tuner()
    }
})


  const Tuner= () => {
    let frecuencia;

    function captarEntrada() {
      
    
        getUserMedia({audio:true}, al_aire);
    }
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
    let analizador
    let freqs
    let tiempos

    function al_aire(fuente) {
        let contextoDeAudio = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext ||window.oAudioContext || window.msAudioContext)();
        let datos_de_fuente = contextoDeAudio.createMediaStreamSource(fuente);
    
      
      // Nodo de audio.
      
        // Conétalo a su destinio...
        analizador = contextoDeAudio.createAnalyser();
        analizador.fftSize = 2048;
      analizador.smoothingTimeConstant = 0.9;
        datos_de_fuente.connect( analizador );
      analizador.connect(contextoDeAudio.destination);
      setInterval(dibujaEspectro, 20);
      
       freqs = new Uint8Array(analizador.frequencyBinCount);
       tiempos = new Uint8Array(analizador.frequencyBinCount);
    }
    
    
      
    function dibujaEspectro(){
    
      let ANCHO = document.getElementById('marco').offsetWidth -80;
      let ALTO= 200;
      // Toma los datos de señal
      analizador.getByteFrequencyData(freqs);
      analizador.getByteTimeDomainData(tiempos);
    
      //console.log("tiempos =>"+ parseFloat(tiempos))
      
      console.log("Frecuencia =>"+ parseFloat(freqs))
      
    
    
   
      let canvas = document.querySelector('canvas');
      let ContextoDeDibujo = canvas.getContext('2d');
     
      canvas.width = ANCHO;
      canvas.height = ALTO;
      // Dibujando el espectro.
      for (let i = 0; i < analizador.frequencyBinCount; i++) {
        let value = freqs[i];
        let porcentaje = value / 256;
       
        
    
        let alto = ALTO * porcentaje;
        let offset = ALTO - alto - 1;
        let barWidth = ANCHO/analizador.frequencyBinCount;
        let hue = i/analizador.frequencyBinCount * 360;
        ContextoDeDibujo.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
        ContextoDeDibujo.fillRect(i * barWidth, offset, barWidth, alto);
      }
    
      // Dibujando el Gráfico en el dominio del tiempo.
      for (let i = 0; i < analizador.frequencyBinCount; i++) {
        let value = tiempos[i];
        let porcentaje = value / 256;
        let alto = ALTO * porcentaje;
        let offset = ALTO - alto - 1;
        let barWidth = ANCHO/analizador.frequencyBinCount;
        ContextoDeDibujo.fillStyle = 'black';
        ContextoDeDibujo.fillRect(i * barWidth, offset, 1, 2);
        
      }
    
      
    return frecuencia;		
        
        
        } 
  }

  return (
    <div className="App">

    <main className="BoxOnda bs-docs-masthead" onLoad="captarEntrada()" >
    <div className="cd tu cd " id="marco" >
      <canvas></canvas>
    </div>

    <button
    className="btn btn-primary mt-1 items-center"
    onClick={() => Tuner()}
  ></button>
  </main>
    </div>
  );
}

export default App;
