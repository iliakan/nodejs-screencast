function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log("Hello, " + who.name);
};

var john = new User("John");
var peter = new User("Peter");

john.hello(peter);