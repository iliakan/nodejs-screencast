var EventEmitter = require('events').EventEmitter;

var db = new EventEmitter();
db.setMaxListeners(0);

function Request() {
  var self = this;

  this.bigData = new Array(1e6).join('*');

  this.send = function(data) {
    console.log(data);
  };

  function onData(info) {
    self.send(info);
  }

  this.end = function() {
    db.removeListener('data', onData)
  };

  db.on('data', onData);
}

setInterval(function() {
  // heapdump
  var request = new Request();
  // ...
  request.end();
  console.log(process.memoryUsage().heapUsed);
  console.log(db);
}, 200);
