export function selectNum(num) {
  console.log(num);
  return {
    type: 'NUM_SELECTED',
    payload: num
  };
}
