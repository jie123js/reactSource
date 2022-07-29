//once
let EventEmitter = require('events');
let e = new EventEmitter();
e.once('click', () => {
  console.log('clicked');
})
e.emit('click');
e.emit('click');