var expect = require('chai').expect;
var request = require('request');

it('Home Page Status', function(done) {
  request('http://localhost:3000', function(error, response, body) {
    expect(response.statusCode).to.equal(200);
    (done);
  });
});
