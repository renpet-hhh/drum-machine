import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components-style/VolumeBar.css';
import changeVolume from '../action-creators/changeVolume';
import updateDisplayText from '../action-creators/updateDisplayText';

class VolumeBar extends Component {
    constructor(props) {
        super(props);
        this.selectorRef = React.createRef();
    }


    /* x0: x-position of selector when movement frame began (frame means each onMouseMove event)
    ** deltaX: x-position increase or decrease (relative to x0) when movement frame ended
    */
    dragSelector = (e) => {
        e = e || window.e;
        let x0 = e.clientX, deltaX = 0;
        let selector = this.selectorRef.current;

        document.onmousemove = (e) => {
            e.preventDefault();
            deltaX = e.clientX - x0;
            x0 = e.clientX; // resets x0
            let newLeft = selector.offsetLeft + deltaX; // offsetLeft gives x-position relative to parent
            let parentWidth = parseInt(window.getComputedStyle(selector.parentNode).getPropertyValue('width'));
            let selectorWidth = parseInt(window.getComputedStyle(selector).getPropertyValue('width'));
            if (newLeft < 0) { // left bound
                newLeft = 0;
                x0 = selector.getBoundingClientRect().left;
                // getBoundingClientRect().left gives x-position relative to viewport (and so does clientX)
            }
            if (newLeft > parentWidth - selectorWidth) { // right bound
                newLeft = parentWidth - selectorWidth;
                x0 = selector.getBoundingClientRect().left;
            }
            selector.style.left = newLeft + "px";
            this.props.changeVolume(this.calcVolume(newLeft, parentWidth, selectorWidth));
        }
        document.onmouseup = (e) => {
            document.onmousemove = null;
            document.onmouseup = null;
            this.props.updateDisplayText("");
        }
    }

    calcVolume = (num, parentWidth, selectorWidth) => { // from 0-x to 0-100
        return Math.round((num/(parentWidth - selectorWidth))*100);
    }
    

    render() {

        return (
            <div className="volume-bar-container">
                <div className="volume-bar">
                    <div className="volume-selector" ref={this.selectorRef} onMouseDown={this.dragSelector}></div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    changeVolume: (volume) => dispatch(changeVolume(volume)),
    updateDisplayText: (text) => dispatch(updateDisplayText(text))
});

export default connect(null, mapDispatchToProps)(VolumeBar);