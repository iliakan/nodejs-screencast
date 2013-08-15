var phrases = require('./ru');

function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log(phrases.Hello + ", " + who.name);
};

module.exports = User;