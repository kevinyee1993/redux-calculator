export function selectNum(num) {
  console.log(num);
  return {
    type: 'NUM_SELECTED',
    payload: num
  };
}

export function selectOperation(operation) {
  console.log(operation);
  return {
    type: 'OPERATION_SELECTED',
    payload: operation
  };
}

// export function changeNums(prevNum, currNum) {
//   return {
//     type: 'CHANGE_NUMS',
//     payload: { prevNum: prevNum, currNum: currNum }
//   };
// }
