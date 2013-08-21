var http = require('http');
var fs = require('fs');

new http.Server(function(req, res) {
  // res instanceof http.ServerResponse < stream.Writable

  if (req.url == '/big.html') {

    var file = new fs.ReadStream('big.html');
    sendFile(file, res);

  }
}).listen(3000);

function sendFile(file, res) {

  file.pipe(res);

}