/**
 * manager.engine 上监听了多少事件
 */
const socket = require('socket.io-client')('http://localhost:3000');

// 事件列表如下：
// open
// error
// data
// ping
// pong
// close

// 监听代码，具体参考 ./lib/manager.js
// error 监听了两次，从代码来看，做了不同的操作。
// 1、在 .open() 里的对error 的监听：未建立连接前的error监听。。。
// 2、另一处：连接建立后，error的监听。。。
// 
// var openSub = on(socket, 'open', fn);
// var errorSub = on(socket, 'error', fn);
// this.subs.push(on(socket, 'data', bind(this, 'ondata')));
// this.subs.push(on(socket, 'ping', bind(this, 'onping')));
// this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
// this.subs.push(on(socket, 'error', bind(this, 'onerror')));
// this.subs.push(on(socket, 'close', bind(this, 'onclose')));