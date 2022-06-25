import { createStore } from 'redux';
import reducer from './Reducers/index.jsx'

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState);
    return store;
  }