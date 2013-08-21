var fs = require('fs');

fs.stat(__filename, function(err, stats) {
  console.log(stats.isFile());
  console.log(stats);
});
