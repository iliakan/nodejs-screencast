function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log("Hello, " + who.name);
};

var vasya = new user.User("Вася");
var petya = new user.User("Петя");

vasya.hello(petya);
