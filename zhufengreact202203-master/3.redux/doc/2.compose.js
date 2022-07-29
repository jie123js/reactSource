//中间件级联

function add1(str) {
  return '1' + str;
}
function add2(str) {
  return '2' + str;
}
function add3(str) {
  return '3' + str;
}
/* function compose(...funcs) {//funcs=[add3,add2,add1]
  return function (args) {
    for (let i = funcs.length - 1; i >= 0; i--) {
      args = funcs[i](args);
    }
    return args;
  }
} */
function compose(...funcs) {//funcs=[add3,add2,add1]
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
//funcs=[add3,add2,add1]
//第一轮 a=add3,b=add2 => (...args) => add3(add2(...args))
//第二轮 a=(...args) => add3(add2(...args)) b=add1 最终会返回 (...args) => a(add1(...args))

let fn = compose(add3, add2, add1);
let result = fn('zhufeng');
console.log(result);//321zhufeng