/* eslint-disable no-useless-constructor */
import React from "react";
import { connect } from "react-redux";
import "./css/Nota.css"





class PrintNote extends React.Component {
  constructor(props) {
    super(props);
    
  }
 
  
 
  

  render() {
    console.log(`130px ${this.props.levelPositivoNote}px`)
    return (
      <>
      <div className="MainBoxTuner">
      <div className="NoteInLetters m-5">
      <h5 className="Hz">{this.props.Hz}<span className="TetxHz">Hz</span></h5>
      <h5 className="NoteLeft">{this.props.NotaLeft}</h5>
      <h4 className="Note SetingMainNote">{this.props.notaMusic}<span className="TetxOctv">{this.props.OctvNota}</span></h4>
      <h5 className="NoteRight">{this.props.NotaRight}</h5>
      <div className="MarcoLeft" style={{backgroundSize:`130px ${this.props.levelPositivoNote}px`}}>
      <div className="MarcoLeftInternal"></div></div>
      <div className="MarcoRight" style={{backgroundSize:`130px ${this.props.levelNegativeNote}px`}}>
      <div className="MarcoRightInternal"></div></div>
      <div className="lineCentral"></div>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>
      </div>
      </div>


      </>
    );
  }
}

PrintNote.propTypes = {};

const mapDispatchToProps = {
  //buy_pokemon_action,
  //return_pokemon_action,
};
const mapStateToProps = (state) => {
    return {
        Nota_MusicLettter: state.Nota_MusicLettter || "-"
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrintNote);
