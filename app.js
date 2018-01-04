var express = require('express');
var app = express();
var port = 3000;
var request = require('request');
var config = require('./config');
var rp = require('request-promise');
var request = require('request');
var bodyParser = require('body-parser');
var fs = require('file-system');

app.use(bodyParser.urlencoded({extended: true}));

//Viewing template
app.set('view engine', 'ejs');

var url = 'https://api.github.com/users/:user';
var myMates = ['jonathanstidwillvf', 'benjaminsunderland', 'neroshan12', 'jameshughes7','racoll'];


var options = {
  url: url,
  headers: {
    'User-Agent': 'request',
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.name);
    console.log(info.bio);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

request(options, callback);

//Routes

app.get('/', function(req, res) {
  var query = req.query.search;
  var url = 'https://api.github.com/users/?s=' + query;
  request(url, function(error, response, body) {
    if(!error && reponse.statusVode == 200) {
      var data = JSON.parse(body);
      res.render("results", {data: data});
    }
  });
});

//Server listener
app.listen(port, function() {
  console.log('Sever running on port ' + port);
});
