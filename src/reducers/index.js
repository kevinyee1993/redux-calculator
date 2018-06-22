import { combineReducers } from 'redux';
import CurrentNumberReducer from './current_number_reducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  currentNumber: CurrentNumberReducer
});

export default rootReducer;
