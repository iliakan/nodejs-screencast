var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  var info;

  if (req.url == '/') {
    info = fs.readFileSync('index.html');
    res.end(info);
  } else { 
    res.statusCode = 404;
    res.end("Not Found");
  }

}).listen(3000);