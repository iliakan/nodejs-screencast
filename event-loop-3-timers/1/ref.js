var http = require('http');

var server = new http.Server(function(req, res) {

  /* обработка запросов */

}).listen(3000);

setTimeout(function() {
  server.close();
}, 2500);

