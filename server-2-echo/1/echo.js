// http://127.0.0.1:3000/echo?message=Hello -> Hello

var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res) {

  var urlParsed = url.parse(req.url, true);

  if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.setHeader('Cache-control', 'no-cache,no-store,must-revalidate');
    res.end( urlParsed.query.message );
  } else {
    res.statusCode = 404; // Not Found
    res.end("Page not found");
  }
});

server.listen(3000, '127.0.0.1');
