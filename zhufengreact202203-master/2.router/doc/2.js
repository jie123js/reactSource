/**
path-to-regexp
sensitive 是否大小写敏感 (默认值: false)
strict 是否允许结尾有一个可选的/ (默认值: false)
end 是否匹配整个字符串 (默认值: true)
 */
let pathToRegexp = require('path-to-regexp');
let keys = [];
let regexp = pathToRegexp('/user/:id/:age', keys);
console.log(regexp);
///^\/user\/(?:([^\/]+?))\/(?:([^\/]+?))\/?$/i
console.log(keys.map(item => item.name));
let url = '/user/100/200';
let match = url.match(regexp);
console.log(match);

let paramNames = keys.map(item => item.name);
let params = paramNames.reduce((memo, paramName, index) => {
  memo[paramName] = match[index + 1];
  return memo;
}, {});
console.log(params);