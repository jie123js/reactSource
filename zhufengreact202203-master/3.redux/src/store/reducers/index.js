
import { combineReducers } from '../../redux';
import counter1 from './counter1';
import counter2 from './counter2';
import color from './color';
//把多个reducer合并成一个reducer
const combinedReducer = combineReducers({
  counter1,
  counter2,
  color
});
export default combinedReducer;

let reducers = {
  counter1,
  counter2
}
//它合并对应的总状态，是各个分reducer的状态之和
/* 
let state = {
  counter1: { number: 0 },
  counter2: { number: 0 }
} */