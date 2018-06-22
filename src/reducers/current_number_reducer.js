export default function(state = 0, action) {
  switch(action.type) {
    case 'NUMBER_SELECTED':
      return action.payload;
  }

  return state;
}
