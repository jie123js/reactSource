//分组捕获
//console.log('1ab'.match(/1[a-z]([b-c])/));
//分组不捕获
//console.log('1ab'.match(/1[a-z](?:[b-c])/));

//命名捕获分组
console.log(/(?<x>\d{2})-(?<y>\d{2})/.exec('11-22'));
//好十几个分组 
console.log('11-22'.replace(/(?<x>\d{2})-(?<y>\d{2})/, "$<y>-$<x>"));
//有些时候我们需要分组匹配，但是又不需要它的值
let mimeType = /\.(?:jpg|png|gif)/;
// match exec test
//test 是正则 的方法
//exec也是正则 的方法
//match是字符串的方法