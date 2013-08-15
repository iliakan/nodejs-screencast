function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log("Hello, " + who.name);
};

console.log("user.js is required!");
