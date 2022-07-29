import { CHANGE_COLOR } from '../action-types';
const initialState = { name: 'black' }
function color(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return { name: action.payload };
    default:
      return state;
  }
}
export default color;