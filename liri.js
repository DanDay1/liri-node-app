// Take code from keys.js



var fs = require('fs');
var request = require('request');

var keys = require('./keys.js');

var twitter = require("twitter");
var client = new twitter(keys.twitterKeys);
// var spotify = require("spotify");

function liri(command, selection) {
    console.log("i guess");
    console.log(command);
    switch (command) {
        case 'find-tweets':
            ftwitter(selection);
            break;
        case 'find-song':
            fspotify(selection);
            break;
        case 'find-movie':
            omdb(selection);
            break;
            // case 'do-what-it-says': doWhatISay(); break;
        default:
            console.log("\nINSTRUCTIONS:\n Enter one of the following commands: \n\n SHOW A USERS MOST RECENT TWEETS: node liri.js my-tweets 'twitter handle'\n SONG INFORMATION: node liri.js find-song 'song name'\n LEARN MORE ABOUT A MOVIE: node liri.js movie-this 'movie name'\n RUN A COMMAND FROM A TEXT FILE: node liri.js do-what-it-says\n");
    }
}



//my twitter;
function ftwitter(selection) {
    console.log("find news");
    var params = { screen_name: 'NH2FakeNews' };
    console.log("something");
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        console.log("something else");
        if (!error && response.statusCode == 200) {
            for (var i = 0; i < 4; i++) {
                console.log("@NH2FakeNews: " + tweets[i].text);
            }
        } else if (error) {
            console.log(error);
        }
    });
}


// spotify trial code from office hours:
function fspotify(selection) {
    console.log("find music");
    var Spotify = require('node-spotify-api');

    var spotify = new Spotify({
        id: 'ca299c04c542498e831715e97c41e9b9',
        secret: '19aac6a2f3024405b2d8c51f65afbaad'
    });

    spotify.search({ type: 'track', query: selection }, function(err, data) {
        // if (err) {
        //   return console.log('Error occurred: ' + err);
        // }

        // console.log(data); 
        // });

        // spotify.search({type: 'track', query: song}, function(err, data) {
        if (!err) {
            for (var i = 0; i < 1; i++) {
                if (data.tracks.items[i] != undefined) {
                    console.log("\n---------------------\n");
                    console.log('Artist: ' + data.tracks.items[i].artists[0].name) //Artist name
                    console.log('Song: ' + data.tracks.items[i].name) //Song name
                    console.log('Album: ' + data.tracks.items[i].album.name) //Album name
                    console.log('Preview Url: ' + data.tracks.items[i].preview_url) //Preview URL
                    console.log("\n---------------------\n");
                };
            };

        } else {
            log('Error occurred: ' + err);

        };
    });
};


//Origional Spotify code:

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }

// console.log(data); 
// });

var request = require("request");

function omdb(selection) {
    // if (!selection) {
    // Grab the movieName which will always be the third node argument.
    // var movieName = process.argv[2];

    console.log(selection);

    var movie;

    if (selection) {
        movie = selection;
    } else if (!selection) {
        movie = "Mr. Nobody";
    } else {
        console.log("Error");
    }

    // Then run a request to the OMDB API with the movie speified
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    request(queryUrl, function(error, response, body) {

        //If the request is successful
        console.log("error = " + error);
        console.log("response.statusCode = " + response.statusCode);
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).

            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMdB Rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            // console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            // console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoUserMeter);
            // console.log("Tomato URL: " + JSON.parse(body).tomatoURL);

            console.log(body);

        }
    });


};

// liri("find-movie", "frozen");
liri("find-song", "Holiday");