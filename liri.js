// Take code from keys.js



var fs = require('fs');
var request = require('request');

var keys = require('./keys.js');

// var twitter = require("twitter");
// var spotify = require("spotify");

function liri(command, selection){
  switch(command){
    // case 'my-tweets': twitter(action); break;
    // case 'spotify-this-song': spotify(action); break;
    case 'find-movie': omdb(selection); break;
    // case 'do-what-it-says': doWhatISay(); break;
    default: log("\nINSTRUCTIONS:\n Enter one of the following commands: \n\n SHOW A USERS MOST RECENT TWEETS: node liri.js my-tweets 'twitter handle'\n SONG INFORMATION: node liri.js spotify-this-song 'song name'\n LEARN MORE ABOUT A MOVIE: node liri.js movie-this 'movie name'\n RUN A COMMAND FROM A TEXT FILE: node liri.js do-what-it-says\n");
  }
}



// //my twitter;

// var params = {screen_name: 'NH2FakeNews'};
// client.get('statuses/user_timeline', params, function(error, tweets, response){
// if (!error && response.statusCode == 200) {
//             for (var i = 0; i < 19; i++) {
//                 console.log("@NH2FakeNews: " + tweets[i].text);
//             }
//         } else if (error) {
//             console.log(error);
//         }
//     });
// }


//Twitter:
//bilalmian
// var params = {screen_name: handle, count: 20};
//   client.get('statuses/user_timeline', params, function(error, tweets, response){
//     if (!error) {
//       log("\n---------------------\n");
//       for (var i = 0; i < params.count; i++) {
//         log("@" + tweets[i].user.screen_name);
//           log("Tweet " + "#" + (i + 1) + ": " + tweets[i].text);
//           log("Created: " + tweets[i].created_at + "\n");
//           log("\n---------------------\n");
//       }
//     }
//   });
// }
// //Melissa
// function Twits() {
//     var params = { screen_name: 'campAccount17' };
//     client.get('statuses/user_timeline', params, function(error, tweets, response) {
//         if (!error && response.statusCode == 200) {
//             for (var i = 0; i < 19; i++) {
//                 console.log("@campAccount17: " + tweets[i].text);
//             }
//         } else if (error) {
//             console.log(error);
//         }
//     });
// }

// function twitterDisplay(){

// //var query1 = process.argv[2];


// var params = {screen_name: 'nodejs'};
// client.get('statuses/home_timeline',{screen_name: 'nodejs', count: 20} , function(error, tweets, response){
//   if(!error){
//     for (var i=0; i<tweets.length; i++){
//     console.log(tweets[i].text);
//     console.log("------------------")
//   }
//   }
// });


//spotify trial code from office hours:

// var Spotify = require('node-spotify-api');

// var spotify = new Spotify({
//   id: 'ca299c04c542498e831715e97c41e9b9',
//   secret: '19aac6a2f3024405b2d8c51f65afbaad'
// });

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }

// console.log(data); 
// });

//Origional Spotify code:

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }

// console.log(data); 
// });



//MELISSA'S CODE:

// function omdbData(media) {
//     var omdbURL = 'http://www.omdbapi.com/?t=' + media + '&plot=short&tomatoes=true&apikey=40e9cece';

//     request(omdbURL, function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             var body = JSON.parse(body);
//             console.log("Title: " + body.Title);
//             console.log("Release Year: " + body.Year);
//             console.log("IMdB Rating: " + body.imdbRating);
//             console.log("Country: " + body.Country);
//             console.log("Language: " + body.Language);
//             console.log("Plot: " + body.Plot);
//             console.log("Actors: " + body.Actors);
//             console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
//             console.log("Rotten Tomatoes URL: " + body.tomatoURL);
//         } else {
//             console.log('Error');
//         }
//         if (media === "Mr. Nobody") {
//             console.log('-----------------------------------------------------------------------------')
//             console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
//             console.log("It's on Netflix!");
//         }
//     });
// }

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
        } else {console.log("Error");
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

    liri("find-movie", "frozen");

