/* eslint-disable no-useless-constructor */
import React from "react";
import { connect } from "react-redux";
import "./css/Nota.css"



class PrintNote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div className="MainBoxTuner">
      <div className="NoteInLetters m-5">
      <h5 className="Hz">122<span className="TetxHz">Hz</span></h5>
      <h5 className="NoteLeft">D#1</h5>
      <h4 className="Note SetingMainNote">C#1</h4>
      <h5 className="NoteRight">C#2</h5>
      <div className="MarcoLeft"></div>
      <div className="MarcoRight"></div>
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
