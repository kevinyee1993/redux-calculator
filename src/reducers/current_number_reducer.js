const INITIAL_STATE = { currentNumber: "", previousNumber: "" };

// export default function(state = INITIAL_STATE, action) {
export default function(state = "", action) {
  switch(action.type) {
    case 'NUMBER_SELECTED':

      // ...state makes shallow copy of it and then what comes after the
      // comma updates the piece of the state that you wanna update
      // return {...state, currentNumber: action.payload};

      return action.payload;
  }

  return state;
}
