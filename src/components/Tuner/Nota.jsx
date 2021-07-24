/* eslint-disable no-useless-constructor */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class PrintNote extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <>
      <div className="MainBoxTuner">
      <div className="NoteInLetters">
      <h4 className="Note">F</h4>
      <h5 className="OctavaOfNote">4</h5>
      <span>#</span>
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
