/**
path-to-regexp
sensitive 是否大小写敏感 (默认值: false)
strict 是否允许结尾有一个可选的/ (默认值: false)
end 是否匹配整个字符串 (默认值: true)
 */
let pathToRegexp = require('path-to-regexp');
let keys = [];
let regexp = pathToRegexp('/home', keys, { end: false });
console.log(regexp);
///^\/home\/?$/i
///^\/home\/?$/i
console.log(regexp.test('/home'));
console.log(regexp.test('/home/'));
console.log(regexp.test('/home//'));
console.log(regexp.test('/home/2/'));
console.log(regexp.test('/home2/'));