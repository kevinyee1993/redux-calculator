export function selectNum(num) {
  console.log(num);
  return {
    type: 'NUM_SELECTED',
    payload: num
  };
}

export function selectOperation(operation, currentNumber, previousNumber) {
  console.log(operation);
  console.log(currentNumber);
  console.log(previousNumber);
  return {
    type: 'OPERATION_SELECTED',
    // payload: operation
    payload: { operation: operation, currentNumber: currentNumber, previousNumber: previousNumber }
  };
}

// export function changeNums(prevNum, currNum) {
//   return {
//     type: 'CHANGE_NUMS',
//     payload: { prevNum: prevNum, currNum: currNum }
//   };
// }
