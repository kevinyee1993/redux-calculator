import React, { Component } from 'react';
import NumberButton from '../components/number_button';

//

export default class NumberButtonWrapper extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="number-button-wrapper">
        This is number button wrapper
        <NumberButton />
      </div>
    );
  }
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
//
//       // return action.payload;
//   }
//
//   return state;
// }



*/
