// Node Packages

var express 		= require('express');
var fs 					= require('fs');
var bodyParser 	= require('body-parser');


// Routes

var routes 			= require('./routes/landing');
var about 			= require('./routes/about');
var contact 		= require('./routes/contact');


// Init Express App

var app 				= express();


// Set up app

app.set('view engine', 'ejs');
app.set('case sensitive routing', true);


// App 'Use'

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', routes);
app.use('/about', about);
app.use('/contact', contact);

// Server

var server 			= app.listen(3000, function () {
	var host 			= server.address().address;
	var port 			= server.address().port;

	console.log('App running on http://localhost', host, port);
});