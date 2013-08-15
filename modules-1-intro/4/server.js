// User делается глобальным через присвоение global.User
require('./user');

var vasya = new user.User("Вася");
var petya = new user.User("Петя");

vasya.hello(petya);
