var http = require('http');
var domain = require('domain');
var handler = require('./handler');

var serverDomain = domain.create(); // домен для ошибок, выпадающих из server.listen

serverDomain.on('error', function(err) {
  console.error("Серверная ошибка %s", err);
  process.exit(255);
});

serverDomain.run(function() {

  var server = http.createServer(function(req, res) {

    var requestDomain = domain.create(); // домен для ошибок во время запроса
    requestDomain.add(req);
    requestDomain.add(res);

    requestDomain.on('error', function(err) {
      res.statusCode = 500;
      res.end(err.message);
      // ...
    });

    requestDomain.run(function() {
      handler(req, res);
    });
  });

  server.listen(3000);
});

