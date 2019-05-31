import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components-style/Switch.css';
import togglePower from '../action-creators/togglePower';

class Switch extends Component  {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.switchRef = React.createRef();
    }

    componentDidMount() {
        this.toggle();
    }

    componentDidUpdate() {
        this.toggle();
    }


    toggle() {
        let elem = this.switchRef.current;
        this.props.isOn ? elem.className += " active"
                        : elem.className = elem.className.replace(" active", "");
    }

    render() {
        return (
            <div className="switch-container">
                <label>Power</label>
                <button ref={this.switchRef} className="switch" onClick={this.props.togglePower}></button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isOn: state.isOn
});

const mapDispatchToProps = (dispatch) => ({
    togglePower: () => dispatch(togglePower())
});

export default connect(mapStateToProps, mapDispatchToProps)(Switch);