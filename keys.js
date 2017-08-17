console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: '<8mtEwpeSf7EoQDHSwrsHVabmd>',
  consumer_secret: '<npwsrkcFHmp94RCzBSgLIDwUGOw8NxcKF6oGmKluz8vsWFOEm3>',
  access_token_key: '<896770400700559360-0NX8QnFVb2qzlNFnFGCksG2I9skcUzT>',
  access_token_secret: '<bZoWVIk8Agg1kek9TKgVDGm1IIRrX40VpnJCyvScrAEfd>',
}

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <ca299c04c542498e831715e97c41e9b>,
  secret: <19aac6a2f3024405b2d8c51f65afbaad>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

// node liri.js my-tweets

//Spotify:
// Client ID: ca299c04c542498e831715e97c41e9b9
// Client Secrere: 19aac6a2f3024405b2d8c51f65afbaad

