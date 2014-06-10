// Modules
var express = require('express');
var app     = express();
var mongoose = require('mongoose');
var routes = require('./routes');
var api = require('./routes/api');

app.api = api;

	
// Change this to whatever the name of your local DB should be
//mongoose.connect('mongodb://localhost/cms');
/*
// Connect to DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Connected to DB.");
});
*/

// Select port to use
var port = process.env.PORT || 3000; // set our port

// Configurations
app.configure(function() {
	app.use(express.static(__dirname + '/public'));	// set the static files location /public/img will be /img for users
	app.use(express.logger('dev'));					// log every request to the console
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());				// simulate DELETE and PUT
	app.use(app.router);
});


// Routes
require('./app/routes')(app); // pass our application into our routes

// Start app
app.listen(port);
console.log('NodeJS started at port ' + port);


// Expose app
exports = module.exports = app;