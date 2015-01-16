var request = require('supertest');
var server = require('../lib/app');
var should = require('should');

describe("GET /", function () {
  it("should display homepage", function (done) {
    request(server)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it("should see static resources (in `/public`)", function (done) {
    request(server)
      .get('/css/app.css')
      .expect('Content-Type', /text\/css/)
      .expect(200, done);
  });

  it("should display login page", function (done) {
    request(server)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it("shouldn't let to /chat page", function (done) {
    request(server)
      .get('/chat')
      .expect(401, done);
  });

  // note: user `u1` with pass `pw` should exist in database.
  it("should throw 403 if wrong auth", function (done) {
    request(server)
      .post('/login')
      .send({username: 'u1', password: 'wrongpassword'})
      .end(function (err, res) {
        if (err) done(err);
        res.statusCode.should.equal(403);
        done();
      });
  });

  it("should return 200 if correct auth", function (done) {
    request(server)
      .post('/login')
      .send({username: 'u1', password: 'pw'})
      .end(function (err, res) {
        if (err) done(err);
        res.statusCode.should.equal(200);
        done();
      });
  });

});
