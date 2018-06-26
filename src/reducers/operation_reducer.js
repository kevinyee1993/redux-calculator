const OPERATION_SELECTED = 'OPERATION_SELECTED';
// const INITIAL_STATE = { operation: '' };

export default function(state='', action) {
  switch(action.type) {
    case OPERATION_SELECTED:
      // let updatedValue;
      // if(action.payload.previousNumber) {
      //   switch(action.payload.operation) {
      //     case '+':
      //       updatedValue = action.payload.previousNumber + action.payload.currentNumber
      //   }
      // } else {
      //   updatedValue = 0;
      // }

      // return { ...state, operation: action.payload.operation};
      return action.payload;
  }

  return state;
}
