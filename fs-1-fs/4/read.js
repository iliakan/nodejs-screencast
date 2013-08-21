var fs = require('fs');

fs.writeFile("file.tmp", "data", function(err) {
  if (err) throw err;

  fs.rename("file.tmp", "new.tmp", function(err) {
    if (err) throw err;

    fs.unlink("new.tmp", function(err) {
      if (err) throw err;
    });
  });

});