/*jshint node:true*/
'use strict';
var express = require('express');
var app = express();
var request = require('superagent');
var fs = require('fs');

app.use(express.static(__dirname + '/client'));

var index = fs.readFileSync('./client/index.html');

app.get('/current/:lat/:longi', function(req, res) {
  var lat = req.params.lat;
  var longi = req.params.longi;

  var weatherUrl = 'http://api.wunderground.com/api/' + process.env.WUNDER_API + '/conditions/q/' + lat + ',' + longi + '.json';
  request
  .get(weatherUrl)
  .end(function(err, data) {
    var jsonResponse = JSON.parse(data.text);
    // jscs:disable
    var tempurature = jsonResponse.current_observation.temp_f;
    var degreeSymbol = String.fromCharCode(176);

    if (tempurature  < 32) {
      return res.json({msg: 'NO! ' + tempurature + degreeSymbol + ' is below freezing!'});
    }
    if (tempurature >= 32 && tempurature < 60) {
      return res.json({msg: 'No! Stay inside and keep warm, it\'s only ' + tempurature + degreeSymbol});
    }
    if (tempurature >= 85) {
      return res.json({msg: 'No! Stay inside and keep cool, it\'s ' + tempurature + degreeSymbol + ' outside!!'});
    }
    if (tempurature >= 60 && tempurature < 66) {
      return res.json({msg: 'Yes! ' + tempurature + degreeSymbol + ' is good, but you may want a light jacket.'});
    }
    res.json({msg: 'YES! ' + tempurature + degreeSymbol + ' is the perfect tempurature to eat outside.'});
  });
});

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Server listening on port %s', port);
});
