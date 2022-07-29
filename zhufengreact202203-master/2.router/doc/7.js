

let source = "^\\/(?:\\/(.+)|\\/*)$";
let regexp = new RegExp(source);
let url = '//xxx';

console.log(url.match(regexp));