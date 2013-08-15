
var phrases;
exports.connect = function() {
  phrases = require('./ru');
};

exports.getPhrase = function(name) {
  if (!phrases[name]) {
    throw new Error("Нет такой фразы: " + name);
  }
  return phrases[name];
};