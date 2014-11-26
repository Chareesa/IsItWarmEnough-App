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
      .get('/current/47.6000/-122.1667')
      .end(function(err, res) {
        expect(res.body).to.include.keys('msg');
        done();
      });
  });
});
