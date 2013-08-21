var http = require('http');
var fs = require('fs');

new http.Server(function(req, res) {
  // res instanceof http.ServerResponse < stream.Writable

  if (req.url == '/big.html') {

    fs.readFile('big.html', function(err, content) {
      if (err) {
        res.statusCode = 500;
        res.end('Server error');
      } else {
        res.setHeader("Content-type", "text/html; charset=utf-8");
        res.end(content);
      }
    });

  }
}).listen(3000);