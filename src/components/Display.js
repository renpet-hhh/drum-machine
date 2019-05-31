import React, { Component } from 'react';
import '../components-style/Display.css';
import { connect } from 'react-redux';

class Display extends Component {

    render() {
        return (
            <div id="display"> {/* change this to className="display" and update css file, id is used to pass FFC's tests */}
                {this.props.displayText}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    displayText: state.isOn ? state.displayText : ""
});


export default connect(mapStateToProps)(Display);