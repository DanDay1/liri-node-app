//Take code from keys.js



var fs = require('fs'); 
var request = require('request');

var keys = require('./keys.js');

var twitter = require("twitter");
var spotify = require("spotify");

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

