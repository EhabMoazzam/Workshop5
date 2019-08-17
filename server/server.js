var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/www'))

// Avoid CROS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
    next();
});

// route
require('./route/login')(app)

let server = http.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port

    console.log("Server listening on : " + host + " port : " + port)

})
