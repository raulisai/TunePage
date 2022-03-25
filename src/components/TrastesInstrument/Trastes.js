/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { connect } from "react-redux";

import "./css/trastes.css"

//components
import fret from "./fret.js"


//import {GetWaveInHz} from '../../helpers/redux/reducers/actionTuner/GetWaveInHz'

 function Trastes(){ 
    //constantes
const singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21]
const doubleFretMarkPositions = [12, 24]
const notesFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const notesSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const instrumentTuningPresets = {
          'Guitar': [4, 11, 7, 2, 9, 4],
          'Bass (4 strings)': [7, 2, 9, 4],
          'Bass (5 strings)': [7, 2, 9, 4, 11],
          'Ukulele': [9, 4, 0, 7]
      }

let allNotes;
let showMultipleNotes = false;
let showAllNotes = false;
let numberOfFrets = 19;
let accidentals = 'flats';
let selectedInstrument = 'Guitar';
let numberOfStrings = instrumentTuningPresets[selectedInstrument].length;

let frets = []
let noteFret=[]


function generateNoteNames(noteIndex, accidentals){
    noteIndex = noteIndex % 12;
    let noteName;
    if (accidentals === 'flats') {
        noteName = notesFlat[noteIndex];
    } else if (accidentals === 'sharps') {
        noteName = notesSharp[noteIndex];
    }
    return noteName;
}

for (let i = 0; i < numberOfStrings; i++){
    noteFret=[]
   
        for ( let fret = 0; fret <= numberOfFrets; fret++) {
            let noteName = generateNoteNames((fret + instrumentTuningPresets[selectedInstrument][i]), accidentals);
                console.log(noteName)
                //noteFret.setAttribute('data-note', noteName);
            if(i === 0 && singleFretMarkPositions.indexOf(fret) !== -1){
                noteFret.push(<div className="note-fret single-fretmark">{ 
                    noteName
                     }</div>)
            }
            else if(i === 0  && doubleFretMarkPositions.indexOf(fret) !== -1){
                noteFret.push(<div className="note-fret single-fretmark">{ 
                    noteName
                     }</div>)
            }
            else{
            noteFret.push(<div className="note-fret">{ 
           noteName
            }</div>)
        }
        } 
    
    
    frets.push(<div className="string">{ 
        noteFret
    }</div>)
}


  
        return (
            <>
            <div className="fretboard">
            {frets}
            </div>
            <div className="note-name-section">
                
            </div>
            </>
        )
    
}
export default Trastes;

