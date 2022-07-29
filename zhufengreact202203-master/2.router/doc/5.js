
//?=属于正向肯定 前瞻 后面需要跟着什么，但是不消耗字符
console.log('1a'.match(/\d(?=[a-z])[a-z]/));
//正向否定
console.log('1a'.match(/\d(?![A-Z])[a-z]/));

//反向肯定 
console.log('a1a'.match(/(?<=[a-z])\d[a-z]/));
//反向否定
console.log('1a'.match(/(?![a-z])\d[a-z]/));

//我赌你的枪里没有子弹 那 1a1 就匹配不上了吧  是的



export * as  six from './6.js';

//react router可以做到keepalive的效果吗
//没有特别好的vue keepalive实现

//suspense适合做组件加载数据的loading吗？ 可以的
