var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

  if (req.url == "/") {
    sendFile('index.html');
    return;
  }

  res.statusCode = 404;
  res.end("Not Found");

}).listen(3000);

function sendFile(file) {

  fs.readFile(file, function(err, content) {
    if (err) {
      console.error(err);
      if (err.code == 'ENOENT') {
        res.statusCode = 404;
        res.end("Файл не найден");
      } else {
        res.statusCode = 500;
        res.end("Ошибка на стороне сервера. Мы уже работаем над её исправлением.");
      }
      return;
    }
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(content);
  });
}

