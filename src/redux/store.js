import { createStore } from 'redux';
import reducer from './reducer/reducer';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reducer);

export default store;