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
      <h4 className="Note SetingMainNote">{this.props.notaMusic}</h4>
    
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
