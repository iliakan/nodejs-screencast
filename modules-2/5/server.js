
var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require('./user');

function run() {
  var vasya = new User("Вася");
  var petya = new User("Петя");

  vasya.hello(petya);

  log(db.getPhrase("Run successful"));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}