const OPERATION_SELECTED = 'OPERATION_SELECTED';

export default function(state='', action) {
  switch(action.type) {
    case OPERATION_SELECTED:
      return action.payload;
  }

  return state;
}
