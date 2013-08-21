var http = require('http');
var fs = require('fs');

function handler(req, res) {
  
  if (req.url == '/') {

    fs.readFile('index.html', function(err, info) {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end("На сервере произошла ошибка!");
        return;
      }

      res.end(info);
    });

  } else { 
    res.statusCode = 404;
    res.end("Not Found");
  }

}

http.createServer(handler).listen(3000);