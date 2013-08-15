var http = require('http');
var fs = require('fs');

// Что происходит с запросами, пока интерпретатор ждёт?
// Действительно ли синхронные операции так опасны?
http.createServer(function(req, res) {
  var info;

  if (req.url == '/') {

    try {
      info = fs.readFileSync('index.html');
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("На сервере произошла ошибка!");
      return;
    }

    res.end(info);

  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }

}).listen(3000);