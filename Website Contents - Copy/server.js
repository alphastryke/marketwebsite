var express = require ('express');

var marketsController = require('./controllers/marketsController')

var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route('/market').get(marketsController.getAllMarkets)
app.listen(8080, "127.0.0.1"); //start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); //output to console