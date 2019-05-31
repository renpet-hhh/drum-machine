import React, { Component } from 'react';
import '../components-style/DrumPad.css';
import { connect } from 'react-redux';
import updateDisplayText from '../action-creators/updateDisplayText';


class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.playAudio = this.playAudio.bind(this);
        this.highlightBkcolor = this.highlightBkcolor.bind(this);
        this.state = {}
        this.audioRef = React.createRef(); // reference to this audio element in DOM
        this.padRef = React.createRef();
    }

    componentDidMount() {
        this.props.passFunc("playAudio" + this.props.text, this.playAudio);
        this.setState(
            {originalBkcolor: this.padRef.current.style.backgroundColor});
        this.audioRef.current.load();
    }


    playAudio = () => {
        this.highlightBkcolor();
        if (!this.props.isOn) return;

        this.audioRef.current.currentTime = 0; // plays from beggining
        this.audioRef.current.volume = this.props.volume/100;
        this.audioRef.current.play();
        this.props.updateDisplayText(this.props.id);
        
    }

    highlightBkcolor = () => {
        // sync to CSS .drum-pad:active bkcolor
        this.padRef.current.style.backgroundColor = "rgb(100, 86, 59)";
        setTimeout(() => this.padRef.current.style.backgroundColor = 
            this.state.originalBkcolor, 100);
    }
    

    render() {    
        return (
            <button ref={this.padRef} className="drum-pad" onClick={this.playAudio} 
            id={this.props.id}>
                <audio ref={this.audioRef} id={this.props.text} src={this.props.src} 
                    type={this.props.type} preload="auto" className="clip"></audio>
                <label>{this.props.text}</label>
            </button>
        );
    }
}

const mapStateToProps = (state) => ({
    isOn: state.isOn,
    volume: state.volume
});

const mapDispatchToProps = (dispatch) => ({
    updateDisplayText: (text) => dispatch(updateDisplayText(text))
});


export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);