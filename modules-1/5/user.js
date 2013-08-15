var phrases = require('./ru'); //расширение json указывать не обязательно

function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log(phrases.Hello + ", " + who.name);
};

console.log("user.js is required!");

exports.User = User;