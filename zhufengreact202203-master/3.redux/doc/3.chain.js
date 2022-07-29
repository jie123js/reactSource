function compose(...funcs) {//funcs=[add3,add2,add1]
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
let promise = (store) => (next) => (action) => {
  console.log('promise');
  next(action);
}
let thunk = (store) => (next) => (action) => {
  console.log('thunk');
  next(action);
}
let logger = (store) => (next) => (action) => {
  console.log('logger');
  next(action);
}
let store = { dispatch() { console.log('原始的dispatch'); } };
let middlewares = [promise, thunk, logger];
let chain = middlewares.map(middleware => middleware(store));
let composed = compose(...chain);
debugger
let newDispatch = composed(store.dispatch);
debugger
newDispatch({ type: 'ADD' });


