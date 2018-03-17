/**
 * socket 内部监听 manager 的事件，包括 open、packet、close
 */
const socket = require('socket.io-client')('http://localhost:3000');

// socket.io.on('open');
// socket.io.on('packet');
// socket.io.on('close');

// open 事件
// manager.engine open => manager open => socket.open
