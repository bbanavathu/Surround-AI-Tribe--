/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

var bodyParser = require('body-parser');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var fs = require('fs');

//create connection to database
var Cloudant = require('@cloudant/cloudant');
var me = 'f9217d0c-6432-484b-ab4c-e0d646c51f8c-bluemix';
var password = '30dfa18b37c67ff1a684ef637ff46739974615ded2dc1a1b99de7746bdba0079';

var cloudant = Cloudant({account:me, password:password});
console.log("connection created");
cloudant.db.list(function(err, allDbs){
	console.log('all my databases: %s', allDbs.join(','))
});




// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false}));


app.post('/project', function(req,res){
	 var project= req.body;
	 var db= cloudant.db.use('proj-db')
	 
	 db.insert(project,function(err, body, headers){
	 	if(err){
	 		res.send('project not inserted'+err.message);
	 		return console.log(err.message);
	 	}
	 	console.log("you have inserted a new project");
	 	res.send('project inserted');
	 });
	 
});



app.post('/login', function(req,res){
	 var project= req.body;
	 var db= cloudant.db.use('proj-db')
	 
	 
});

app.post('/display', function(req,res){
	var db= cloudant.db.use('proj-db')
	db.get('rainfall event', function(err,body){
	if(!err)
	console.log(body);
	});


});


// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
