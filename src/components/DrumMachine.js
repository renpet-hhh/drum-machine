import React, { Component } from 'react';
import DrumPad from './DrumPad';
import '../components-style/DrumMachine.css';
import Display from './Display';
import { connect } from 'react-redux';
import Switch from './Switch';
import VolumeBar from './VolumeBar';
import Space from './Space';

class DrumMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.passFunc = this.passFunc.bind(this);
    }

    passFunc(property, func) {
        let newState = {};
        newState[property] = func;
        this.setState(newState);
    }

    componentDidMount() {
        document.getElementsByTagName("body")[0].addEventListener("keydown", (e) => {
            switch (e.key.toUpperCase()) {
                case 'Q':
                    this.state.playAudioQ(); // plauAudio always triggers highlighting
                    break;
                case 'W':
                    this.state.playAudioW();
                    break;
                case 'E':
                    this.state.playAudioE();
                    break;
                case 'A':
                    this.state.playAudioA();
                    break;
                case 'S':
                    this.state.playAudioS();
                    break;
                case 'D':
                    this.state.playAudioD();
                    break;
                case 'Z':
                    this.state.playAudioZ();
                    break;
                case 'X':
                    this.state.playAudioX();
                    break;
                case 'C':
                    this.state.playAudioC();
                    break;
                default:
                    console.log("listening...");
            }
        })
    }

    render() {

        return (
            <div id="drum-machine"> {/* should be className instead of id, but FFC tests requires id */}
                <div className="pads-container">
                    <DrumPad text="Q" 
                    src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/41[kb]c4.aif.mp3" 
                    id="Clap1" type="audio/mp3" passFunc={this.passFunc}></DrumPad>
                    <DrumPad text="W"
                    src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/70[kb]c1.aif.mp3"
                    id="Clap2" type="audio/mp3" passFunc={this.passFunc}></DrumPad>
                    <DrumPad text="E"
                    src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/36[kb]c2.aif.mp3"
                    id="Clap3" type="audio/mp3" passFunc={this.passFunc}></DrumPad>
                    <DrumPad text="A"
                    src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/13[kb]bell1.aif.mp3"
                    id="Bell1" type="audio/mp3" passFunc={this.passFunc}></DrumPad>
                    <DrumPad text="S"
                    src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/15[kb]bell2.aif.mp3"
                    id="Bell2" type="audio/mp3" passFunc={this.passFunc}></DrumPad>
                    <DrumPad text="D"
                    src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/5[kb]shaker.aif.mp3"
                    id="Shaker" type="audio/mp3" passFunc={this.passFunc}></DrumPad>
                    <DrumPad text="Z"
                    src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/16[kb]808bd.aif.mp3"
                    id="Kick" type="audio/mp3" passFunc={this.passFunc}></DrumPad>
                    <DrumPad text="X"
                    src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/81[kb]909-bright-ride.aif.mp3"
                    id="Rider" type="audio/mp3" passFunc={this.passFunc}></DrumPad>
                    <DrumPad text="C"
                    src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Gongs%20and%20Super%20Crashes/288[kb]down_in_china.aif.mp3"
                    id="Crash" type="audio/mp3" passFunc={this.passFunc}></DrumPad>
                </div>
                <div className="right-container">
                    <Display></Display>
                    <Space marginTop="2rem"></Space>
                    <Switch></Switch>
                    <Space marginTop="2rem"></Space>
                    <VolumeBar></VolumeBar>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isOn: state.isOn,
    displayText: state.displayText
});

export default connect(mapStateToProps)(DrumMachine);