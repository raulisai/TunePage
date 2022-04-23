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
      <h5 className="NoteLeft">DO#</h5>
      <h4 className="Note SetingMainNote">RE<span className="TetxOctv">4</span></h4>
      <h5 className="NoteRight">RE#</h5>
      <div className="MarcoLeft">
      <div className="MarcoLeftInternal"></div>
      </div>
      <div className="MarcoRight">
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
