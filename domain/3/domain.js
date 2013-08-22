var domain = require('domain');
var fs = require('fs'), http = require('http');

var d = domain.create(), server;

d.on('error', function(err) {
  console.error("Домен перехватил %s", err);
});

d.run(function() {
  // d.enter();   -> process.domain

  server = new http.Server();

  // d.exit();
});

console.log(server.domain);

server.on('boom', function() {
  setTimeout(function() {
    fs.readFile(__filename, function() {
      ERROR();
    });
  }, 1000);
});

server.emit('boom');
