// JS for Contact Page

var express 		= require('express');
var router 			= express.Router();

router.get('/', function (req, res) {
	res.render('templates/contact');
});

// Router Post

router.post('/message', function(req, res) {
	console.log(req.body);


// Node Mailer

var nodemailer  			= require('nodemailer');
var transporter 			= nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: '*******',
		pass: '*******'
	}
});

var mailOptions = {
	from  	:'sender@address',
	to    	:'bcpaff@gmail.com',
	subject : 'hello',
	text		: 'hello world!'
}


transporter.sendMail(mailOptions, function(error, response) {
	if(error){
		console.log(error);
	} else {
		console.log("Message sent!")
	}
});

	res.send('Thanks for Contacting me -- I\'ll get back to you soon!');
});







module.exports 	= router;