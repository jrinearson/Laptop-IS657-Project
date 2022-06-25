import { createStore } from 'redux';
import reducer from './Reducers/index.js'

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState);
    return store;
  }