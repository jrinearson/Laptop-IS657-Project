import { combineReducers } from 'redux';

import cartReducer from './CartReducer.jsx';

let reducers = combineReducers({
    cartReducer: cartReducer,
  });
  
  const rootReducer = (state, action) => {
    return reducers(state, action);
  };
  
  export default rootReducer;