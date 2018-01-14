var express = require('express');
var app = express();
var port = 3000;
var request = require('request');
var config = require('./config');
var CommitActivity = require('./models/commitActivity');
var request = require('request');
var bodyParser = require('body-parser');
var fs = require('file-system');


//Body parser middleware
app.use(bodyParser.urlencoded({extended: true}));

//Viewing template
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


var owner = 'parcel-bundler';
var repo = 'parcel';
var url = `https://api.github.com/repos/${owner}/${repo}/stats/participation`;
var commitActivity = new CommitActivity();

var options = {
  url: url,
  method: 'GET',
  headers: {
    'User-Agent': 'request',
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET
  }
};


function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body);
    var winterMonthsFactor = `${commitActivity.winterCommitterFactor(data.all)}`;
   console.log(`For the ${repo} repo: Developers commit ${Math.round(winterMonthsFactor * 100) / 100} more times than the rest of the year`);
  }
}


request(options, callback);

//Routes

app.get('/results', function(req, res) {
  var query = req.query.search;
  var url = 'https://api.github.com/users/?s=' + query;
  request(url, function(error, response, body) {
    if(!error && response.statusVode == 200) {
      var data = JSON.parse(body);
      res.render("home"), {data: data};
    }
  });
});

//Server listener
app.listen(port, function() {
  console.log('Sever running on port ' + port);
});

module.exports = app;
