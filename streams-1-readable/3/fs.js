var fs = require('fs');

// fs.ReadStream наследует от stream.Readable
var stream = new fs.ReadStream("nono.html");

stream.on('readable', function() {
  var data = stream.read();
  console.log(data.length);
});

stream.on('end', function() {
  console.log("THE END");
});

stream.on('error', function(err) {
  if (err.code == 'ENOENT') {
    console.log("Файл не найден, попинайте админа, пусть выложит..");
  } else {
    console.error(err);
  }
});