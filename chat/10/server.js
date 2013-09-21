var WebSocketServer = require('ws').Server;
var http = require('http');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(8080);

var webSocketServer = new WebSocketServer({server: server});
webSocketServer.on('connection', function(ws) {

  var timer = setInterval(function() {
    ws.send(JSON.stringify(process.memoryUsage()), function(error) {
      /* handle errors */
    });
  }, 100);

  console.log('клиент подключился');

  ws.on('close', function() {
    console.log('клиент отключился');
    clearInterval(timer);
  });
});
