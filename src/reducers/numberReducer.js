// check this later

const NUM_SELECTED = 'NUM_SELECTED';

export default function(state="", action) {
  switch(action.type) {
    case NUM_SELECTED:
      return action.payload;
  }

  return state;
}
