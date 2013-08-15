// Демо простейшего применения EE
// аргументы передаются по цепочке
// обработчики срабатывают в том же порядке, в котором назначены

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('error', function(err) {
  // ..
  console.error(err);
});

server.emit('error', new Error("серверная ошибка"));
