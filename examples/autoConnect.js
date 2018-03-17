const io = require('socket.io-client');
const socket = io('http://localhost:3000', {autoConnect: true});

// 上面 autoConnect 的影响是，下面两个方法会自动调用
// socket.open()、socket.io.open() 
// 
// 如果 autoConnect 为 false
// 那么，需要人工调用 socket.io.open()