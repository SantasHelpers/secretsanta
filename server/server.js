var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var port = port = process.env.PORT || 8000;

var app = express();
app.use('/', express.static(path.join(__dirname + '/../client')));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.listen(port);
console.log('listening on ', port);
module.exports = app;
