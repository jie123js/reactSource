function compose(...funcs) {//funcs=[add3,add2,add1]
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
export default compose;