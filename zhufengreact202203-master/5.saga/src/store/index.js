import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import rootSaga from './rootSaga'
import createSagaMiddleware from '../redux-saga';
const sagaMiddleware = createSagaMiddleware();
let store = applyMiddleware(sagaMiddleware)(createStore)(reducer);
sagaMiddleware.run(rootSaga);
export default store;