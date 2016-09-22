var express = require("express");
var app = express();
// var path = require('path');
// var mongoose = require('mongoose');
var request = require('request');

var port = process.env.PORT || 8080;

// var Schema = mongoose.Schema;

/*var searchData = mongoose.model('searchData', new Schema({
    carp
}));*/

// app.use(express.static(path.join(__dirname, '/public')));


app.get('/', function(req, res, err) {
    request('https://www.googleapis.com/customsearch/v1?cx=007771692252375537010:q4jjymtgvqg&key=AIzaSyAfLBv6rrMMjhiKtteq_Dw4AjGbVveB0Vw&searchType=image&q=great%20barrier%20reef&start=16', 
    function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(JSON.parse(body));
        }
    });
});

app.listen(port, function() {
    console.log('You are listening on: ${port}');
})