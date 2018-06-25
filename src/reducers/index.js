import { combineReducers } from 'redux';
import NumberReducer from './number_reducer';
import OperationReducer from './operation_reducer';


const rootReducer = combineReducers({
  // state: (state = {}) => state
  numbers: NumberReducer,
  operation: OperationReducer
});

export default rootReducer;
