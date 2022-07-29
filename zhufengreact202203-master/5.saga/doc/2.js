
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
let it = gen();
let r1 = it.next();
console.log(r1);
//一旦抛异常了，那么这个生成器就执行结束了
//一旦调用了return,那这个迭代器也认为执行结束了
//let r2 = it.throw();
let r2 = it.return();
console.log(r2);

let r3 = it.next();
console.log(r3);