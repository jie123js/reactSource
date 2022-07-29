import counter from './counter';
import { combineReducers } from 'redux';
import { routerReducer } from '../../history';
const reducers = {
  counter,
  router: routerReducer
}
const combinedReducer = combineReducers(reducers);
export default combinedReducer;