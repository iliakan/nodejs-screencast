var fs = require('fs');

fs.readFile("blablabla", {encoding: 'utf-8'}, function(err, data) {
  if (err) {
    if (err.code == 'ENOENT') {
      console.error(err.message); 
    } else {
      console.error(err);
    }
  } else {
    console.log(data);
  }
});
