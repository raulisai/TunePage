/* eslint-disable no-useless-constructor */
import React from "react";
import PropTypes from "prop-types";
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
      <h4 className="Note SetingMainNote">F</h4>
      <h5 className="OctavaOfNote SetingMainNote">4</h5>
      <span className="KeyBlack SetingMainNote">#</span>
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
