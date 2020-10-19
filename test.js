const cc = require('./index');

console.log(cc.set('fg_yellow','bg_blue', 'Hello', 'World'));

console.log(cc.set('fg_red', 'Hello', 'World'));

console.log(cc.set('bg_green', 'fg_purple', 'Hello', 'World'));

cc.list();
