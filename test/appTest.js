'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
require('../server.js');
chai.use(chaihttp);
var port = process.env.PORT || 3000;

var url = 'http://localhost:' + port;

describe('Call WUNDERAPI and retrieve key', function() {
  it('should retrieve key temp_f', function(done) {
    chai.request(url)
      .get('/current/')
      .send({'lat': 75.42, 'longi': -32.18})
      .end(function(err, res) {
        expect(res.body).to.include.keys('temp_f');
        done();
      });
  });
});
