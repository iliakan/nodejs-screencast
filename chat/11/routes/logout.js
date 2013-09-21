exports.post = function(req, res) {
  req.session.destroy();
  res.redirect('/');
};