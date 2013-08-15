var http = require('http');

var server = new http.Server();

server.listen(1337, '127.0.0.1');

server.on('request', function(req, res) {
  res.end("Привет, мир!");
});