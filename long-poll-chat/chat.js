
var clients = [];

exports.subscribe = function(req, res) {
  console.log("subscribe");

  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  clients.push(res);

  res.on('close', function() {
    clients.splice(clients.indexOf(res), 1);
  });
};

exports.publish = function(message) {
  console.log("publish '%s'", message);

  clients.forEach(function(res) {
    console.log("send to client");
    res.end(message);
  });

  clients = [];
};

setInterval(function() {
  console.log(clients.length);
}, 5000);