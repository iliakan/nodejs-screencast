var http = require('http');

var server = new http.Server(function(req, res) {

  /* обработка запросов */

}).listen(3000);

setTimeout(function() {
  server.close();
}, 2500);

var timer = setInterval(function() {
  console.log(process.memoryUsage());
}, 1000);

timer.unref();
