// JS for Landing Page

var express 		= require('express');
var router 			= express.Router();

router.get('/', function (req, res) {
	res.render('templates/landing');
});

module.exports 	= router;