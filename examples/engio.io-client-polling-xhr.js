const XHR = require('engine.io-client/lib/transports/polling-xhr');
const xhr = new XHR({});
// console.log(xhr);

let pollingXHRProto = Object.getPrototypeOf(xhr);
let pollingProto = Object.getPrototypeOf(pollingXHRProto);
let transportProto = Object.getPrototypeOf(pollingProto);

let map = {};
let protos = [
  Object.keys( pollingXHRProto ), 
  Object.keys( pollingProto ), 
  Object.keys( transportProto )
]
protos = Array.prototype.concat.apply([], protos);
// .map(proto => Object.keys(proto))
protos = protos.filter(func => {
  if (!map[func]) {
    map[func] = true;
    return true;
  } else {
    return false;
  }
});

console.log(protos.sort().join('\n'));

/*
addEventListener
close
doClose
doOpen
doPoll
doWrite
emit
hasListeners
listeners
name
off
on
onClose
onData
onError
onOpen
onPacket
once
open
pause
poll
removeAllListeners
removeEventListener
removeListener
request
send
supportsBinary
uri
write
*/

/*
open
doOpen
close
doClose
poll
doPoll
write
doWrite
send
request
pause
onClose
onData
onError
onOpen
onPacket
supportsBinary
uri
name

off
on
addEventListener
hasListeners
listeners
once
removeAllListeners
removeEventListener
removeListener
emit
*/
