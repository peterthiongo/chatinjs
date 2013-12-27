// Module dependencies.
var express = require('express');

var app = express.createServer();

// Configuration
app.configure( function() {
});

// Routes
app.get('/', function(req, res) {
    res.send('Hello world, guess what this is?');
});

app.listen(3000):