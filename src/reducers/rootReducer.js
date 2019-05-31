import { UPDATE_DISPLAY_TEXT } from "../action-creators/updateDisplayText";
import { TOGGLE_POWER } from "../action-creators/togglePower";
import { CHANGE_VOLUME } from "../action-creators/changeVolume";




export default function rootReducer(state, action) {
    let copyState = Object.assign({}, state);
    switch (action.type) {
        case UPDATE_DISPLAY_TEXT:
            return Object.assign(copyState, {displayText: action.text});
        case TOGGLE_POWER:
            return Object.assign(copyState, {isOn: !state.isOn});
        case CHANGE_VOLUME:
            return Object.assign(copyState, {volume: action.volume, displayText: "Volume: " + action.volume});
        default:
            return copyState;
    }
}