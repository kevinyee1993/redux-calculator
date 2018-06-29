const NUM_SELECTED = 'NUM_SELECTED';
const OPERATION_SELECTED = 'OPERATION_SELECTED';
const INITIAL_STATE = { currentNumber: "0", previousNumber: "" };

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case NUM_SELECTED:
      return { ...state, currentNumber: action.payload };
    case OPERATION_SELECTED:
      console.log(action.payload.currentNumber);
      return { ...state, currentNumber: action.payload.currentNumber, previousNumber: action.payload.previousNumber }
  }

  return state;
}


/* just reference to spread operator and setting initial state

// const INITIAL_STATE = { currentNumber: "", previousNumber: "", operation: "" };
//
// // export default function(state = "", action) {
// export default function(state = INITIAL_STATE, action) {
//   switch(action.type) {
//     case 'NUMBER_SELECTED':
//
//       // ...state makes shallow copy of it and then what comes after the
//       // comma updates the piece of the state that you wanna update
//       return {...state, currentNumber: action.payload};
//   }
//
//   return state;
// }



*/
