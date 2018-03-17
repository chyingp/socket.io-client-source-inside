var io = require('socket.io-client');
var socket = io('http://localhost:8000/test', {
  // path: 'test'
});

// 关于 opts.path 的解释
// path (String) name of the path that is captured on the server side (/socket.io)

/*
  var socket = io('http://localhost:8000');
  
  var parsed = url(uri);
  var source = parsed.source; // "http://localhost:8000"
  var id = parsed.id; // "http://localhost:8000"
  var path = parsed.path; // "/"

  // parsed.source == http://localhost:8000, parsed.id == http://localhost:8000, parsed.path == /
 */


/*
  var socket = io('http://localhost:8000/test');
  
  var parsed = url(uri);
  var source = parsed.source; // "http://localhost:8000/test"
  var id = parsed.id; // "http://localhost:8000"
  var path = parsed.path; // "/test"

  // parsed.source == http://localhost:8000/test, parsed.id == http://localhost:8000, parsed.path == /test
 */

/*
  var socket = io('http://localhost:8000', {
    path: 'test'
  });
  
  var parsed = url(uri);
  var source = parsed.source; // "http://localhost:8000"
  var id = parsed.id; // "http://localhost:8000"
  var path = parsed.path; // "/"

  // parsed.source == http://localhost:8000, parsed.id == http://localhost:8000, parsed.path == /

  // 注意，在这种情况下，parsed.path 是 "/"，而不是 "/test"
  
  // 在 socket.io-client 的源码里，最后返回了 io.socket()，第一个参数就是 "/"
  return io.socket(parsed.path, opts);
 */

socket.on('connect', function(){});
socket.on('event', function(data){});
socket.on('disconnect', function(){});