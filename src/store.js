import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const INITIAL_STATE = {displayText: "", drumPadToPlay: "", isOn: true, volume: 100};
const store = createStore(rootReducer, INITIAL_STATE);
export default store;