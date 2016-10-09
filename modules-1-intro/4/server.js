// User делается глобальным через присвоение global.User
require('./user');

var vasya = new User("Вася");
var petya = new User("Петя");

vasya.hello(petya);
