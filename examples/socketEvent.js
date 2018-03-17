const io = require('socket.io-client');

const socket = io('http://localhost:3000');
const events = Object.keys( socket._callbacks ).map(event => event.replace('$', ''));

// socket 默认监听 以下事件
console.log(events); // [ 'connecting', 'connect' ]
