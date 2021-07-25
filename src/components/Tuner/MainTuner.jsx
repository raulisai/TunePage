/* eslint-disable no-useless-constructor */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//componentes
import Nota from "./Nota"

class MainTuner extends React.Component {
    constructor(props) {
        super(props);
      }
    

    render() {
        return (
            <div>
            <Nota />
            </div>
        )
    }
}

MainTuner.propTypes = {
    
};

const mapStateToProps = (state) =>  {
    return {
        
    };
}

export default connect(mapStateToProps)(MainTuner);
