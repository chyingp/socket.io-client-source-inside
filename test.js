const UrlUtil = require('socket.io-client/lib/url');

let parsed = UrlUtil('http://localhost:3000/nsp1');
console.log('id: %s, path: %s, source: %s', parsed.id, parsed.path, parsed.source);
// id: http://localhost:3000, path: /nsp1, source: http://localhost:3000/nsp1

parsed = UrlUtil('http://localhost:3000/nsp2');
console.log('id: %s, path: %s, source: %s', parsed.id, parsed.path, parsed.source);
// id: http://localhost:3000, path: /nsp2, source: http://localhost:3000/nsp2