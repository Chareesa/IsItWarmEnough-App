'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
require('../server');
chai.use(chaihttp);
var port = process.env.PORT || 3000;

var url = 'http://localhost:' + port;

describe('Retrieve local tempurature from WUNDERAPI', function() {
  it('should return the temperature', function(done) {
    chai.request(url)
      .get('/current/')
      .send({'lat': 75.42, 'longi': -32.18})
      .end(function(err, res) {
        expect(res.body).to.include.keys('temp_f');
        done();
      });
  });
});

//Key - 9bca7f728808855f
