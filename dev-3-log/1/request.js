var url = require('url');
var debug = require('debug')('server:request'); // нужно установить npm i debug

module.exports = function(req, res) {
  var urlParsed = url.parse(req.url, true);

  debug("Got request", req.method, req.url);

  if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message ) {
    var message = urlParsed.query.message;
    debug("Echo: " + message);
    res.end(message);
    return;
  }

  debug("Unknown URL");

  res.statusCode = 404;
  res.end('Not Found');
};