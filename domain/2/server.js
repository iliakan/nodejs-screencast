var http = require('http');
var fs = require('fs');

function handler(req, res) {
  if (req.url == '/') {

    fs.readFile('no-such-file', function(err, content) {

      if (err) throw err; // JSON.parse("invalid!")

      res.end(content);
    });

  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }

}


var server = new http.createServer(handler);
module.exports = server;
