var fs = require('fs');

fs.readFile(__filename, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
