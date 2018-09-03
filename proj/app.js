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

//create connection to database
var Cloudant = require('@cloudant/cloudant');
var me = 'd8d8290f-e279-4e4e-8d89-745a81afde67-bluemix';
var password = 'ea26efe23f4fa1352490634be50d61b16fcc3ca018cbc1d408aec6a894a2197e';

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
	 
	 db.query(project,function(err, body, headers){
	 	if(err){
	 		res.send('project not inserted'+err.message);
	 		return console.log(err.message);
	 	}
	 	console.log("you have inserted a new project");
	 	res.send('project inserted');
	 });
	 
});


// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
