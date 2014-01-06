var request = require('supertest');
var server = require('lib/app');
var should = require('should');

describe("GET /", function () {
  it("should display homepage", function (done) {
    request(server)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
