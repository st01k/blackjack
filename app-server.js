var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 25920;

require("console-stamp")(console, {
        pattern : "dd/mm/yyyy HH:MM:ss.l",
        colors: {
                stamp: "yellow",
                label: "white"
        }
});

var prevIP;
app.use(function(req, res, next) {
        var currIP = req.ip;
        if (currIP != prevIP) {
                console.log('accessed from ' + req.ip);
                prevIP = currIP;
        }
        next();
});

//CORS Middleware, causes Express to allow Cross-Origin Requests
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(allowCrossDomain);

process.on('SIGTERM', function () {
	console.log("... shutting app server down ...");
	app.close();
});

app.listen(port, function() {
	console.log('... blackjack app listening on port ' + port + ' ...');
});
