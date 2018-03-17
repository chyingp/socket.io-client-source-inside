var socketIOClient = require('socket.io-client');
var socket = socketIOClient('http://localhost:3000', {
  autoConnect: false
});
console.log(socket.io);