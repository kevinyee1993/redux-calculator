import { combineReducers } from 'redux';
import NumberReducer from './number_reducer';


const rootReducer = combineReducers({
  // state: (state = {}) => state
  numbers: NumberReducer
});

export default rootReducer;
