export function selectNum(num) {
  console.log(num);
  return {
    type: 'NUM_SELECTED',
    payload: num
  };
}

export function selectOperation(operation, prevNum, currNum) {
  console.log(operation);
  console.log(prevNum);
  console.log(currNum);
  return {
    type: 'OPERATION_SELECTED',
    // payload: operation
    payload: { operation: operation,
               prevNum: prevNum,
               currNum: currNum }
  };
}

// export function changeNums(prevNum, currNum) {
//   return {
//     type: 'CHANGE_NUMS',
//     payload: { prevNum: prevNum, currNum: currNum }
//   };
// }
