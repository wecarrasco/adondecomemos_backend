var hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');
var routes = require('./routes');
var auth = require('hapi-auth-cookie');
var corsHeaders = require('hapi-cors-headers')

var server = new hapi.Server();
server.connection({
    port: process.env.PORT || 8000,
    routes: {cors: {origin:['*']}}
});

server.ext('onPreResponse', corsHeaders)

// server.route({
//   config:{
//     cors:{
//       origin: ['*']
//     }
//   }
// });

mongoose.connect('mongodb://admin:admin@ds159033.mlab.com:59033/dondecomemos');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

server.register([inert], function(err){

  // server.auth.strategy('session', 'cookie', {
  //   password: 'secretpasswordforencryption',
  //   cookie: 'angular-scaffold-cookie',
  //   ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
  //   isSecure: false
  // });

	server.route(routes.endpoints);
	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
