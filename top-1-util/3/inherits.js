var util = require('util');

// Родитель
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log("Ходит " + this.name);
};

// Потомок
function Rabbit(name) {
  this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
  console.log("Прыгает " + this.name);
};

// Использование
var rabbit = new Rabbit("наш кролик");
rabbit.walk();
rabbit.jump();