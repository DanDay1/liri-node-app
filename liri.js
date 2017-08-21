var fs = require('fs');
var request = require('request');

var keys = require('./keys.js');

var twitter = require("twitter");
var client = new twitter(keys.twitterKeys);
// var spotify = require("spotify");



function liri(command, selection) {

    switch (command) {
        case 'my-tweets':
            ftwitter(selection);
            break;
        case 'spotify-this-song':
            fspotify(selection);
            break;
        case 'movie-this':
            omdb(selection);
            break;
            case 'do-what-it-says': doWhatISay(); break;
        default:
            console.log("\nINSTRUCTIONS:\n Enter one of the following commands: \n\n SHOW A USERS MOST RECENT TWEETS: node liri.js my-tweets 'twitter handle'\n SONG INFORMATION: node liri.js spotify-this-song 'song name'\n LEARN MORE ABOUT A MOVIE: node liri.js movie-this 'movie name'\n RUN A COMMAND FROM A TEXT FILE: node liri.js do-what-it-says\n");
    }
}



//my twitter;
function ftwitter(selection) {
    var params = { screen_name: 'NH2FakeNews' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error && response.statusCode == 200) {
          console.log("\n---------------------\n");
            for (var i = 0; i < 4; i++) {
                console.log("@NH2FakeNews: " + tweets[i].text);
                console.log("\n---------------------\n");
            }
        } else if (error) {
            console.log(error);
        }
    });
}


// spotify
function fspotify(selection) {
    var Spotify = require('node-spotify-api');

    var spotify = new Spotify({
        id: 'ca299c04c542498e831715e97c41e9b9',
        secret: '19aac6a2f3024405b2d8c51f65afbaad'
    });

    var song;

    if (selection) {
        song = selection;
    } else {
        song = "the sign";
    };

    spotify.search({ type: 'track', query: song }, function(err, data) {

        if (!err) {
            for (var i = 0; i < 10; i++) {
                if (data.tracks.items[i] != undefined) {
                    console.log("\n---------------------\n");
                    console.log('Artist: ' + data.tracks.items[i].artists[0].name) 
                    console.log('Song: ' + data.tracks.items[i].name) 
                    console.log('Album: ' + data.tracks.items[i].album.name) 
                    console.log('Preview Url: ' + data.tracks.items[i].preview_url) 
                    console.log("\n---------------------\n");
                };
            };

        } else {
            log('Error occurred: ' + err);

        };
    });
};

var request = require("request");

function omdb(selection) {

    console.log(selection);

    var movie;

    if (selection) {
        movie = selection;
    } else {
        movie = "Mr. Nobody";
    };

    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

    console.log(queryUrl);

    request(queryUrl, function(error, response, body) {

        console.log("error = " + error);
        console.log("response.statusCode = " + response.statusCode);
        if (!error && response.statusCode === 200) {

            console.log("\n---------------------\n");
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMdB Rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("\n---------------------\n");
            // console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            // console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoUserMeter);
            // console.log("Tomato URL: " + JSON.parse(body).tomatoURL);

            // console.log(body);

        } else {
            log('Error occurred: ' + err);

        };
    });
};

function doWhatISay() {
    fs.readFile('./random.txt', 'UTF-8', function(error, data) {
        if (error) {
            console.log('Error occurred: ' + err);
        } else {
            var splitData = data.split(",");
            action = splitData[0];
            argument = splitData[1];
            liri(action, argument);
        }
    });
};


liri(process.argv[2], process.argv[3]);
