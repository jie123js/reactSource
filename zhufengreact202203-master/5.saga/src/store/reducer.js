
import { ADD, MINUS } from './action-types';
const initialState = { number: 0 };
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
}
export default reducer