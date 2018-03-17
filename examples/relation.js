/**
 * 调用一、调用二近似可以看做是等同的，只不过 socket.io-client 内部做了封装，隐藏了很多细节。
 * 
 * 但两者有差异，比如：
 * const conn1 = io('http://localhost:3000/nsp1', opts);
 * 内部是调用 Manager(uri, opts).socket(nsp, opts) 来创建socket
 * 除了往 manager.nsp[] 上挂载 socket 外，还有事件监听等操作
 * 
 * 另外，io(uri, opts).io 其实指向的是 manager 实例，到处都用 io 这个名字，非常混乱。
 */

// 调用一
{
  const io = require('socket.io-client');
  const opts = { autoConnect: false };
  const conn1 = io('http://localhost:3000/nsp1', opts);
  const conn2 = io('http://localhost:3000/nsp2', opts);
  conn1.io.open();
}


// 调用二
{
  const Manager = require('socket.io-client/lib/manager');
  const Socket = require('socket.io-client/lib/socket');
  
  const opts = { autoConnect: false };
  const socketManager = new Manager('http://localhost:3000', opts);
  
  const nsp1 = '/nsp1';
  const conn1 = new Socket(socketManager, nsp1, opts);
  socketManager.nsps[nsp1] = conn1;
  
  const nsp2 = '/nsp2';
  const conn1 = new Socket(socketManager, nsp2, opts);
  socketManager.nsps[nsp2] = conn1;
  
  socketManager.open();
}

