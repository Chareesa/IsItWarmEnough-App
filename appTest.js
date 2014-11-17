'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
require('../server');
chai.use(chaihttp);
var port = process.env.PORT || 3000;

var url = 'http://localhost:' + port;

describe('Get tempurature from WUNDERAPI', function() {
  it('should return the temperature', function(done) {
    chai.request(url)
      .get('/current/')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res.body).to.include.keys('msg');
        done();
      });
  });
});

//Key - 9bca7f728808855f
