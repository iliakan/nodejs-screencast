// Демо простейшего применения EE
// аргументы передаются по цепочке
// обработчики срабатывают в том же порядке, в котором назначены

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function(request) {
  request.approved = true;
});

server.on('request', function(request) {
  console.log(request);
});


server.emit('request', {from: "Клиент"});

server.emit('request', {from: "Ещё клиент"});
