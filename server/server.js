var express = require('express');


var app = express();




var port = port = process.env.PORT || 8000;

app.listen(port);
console.log('listening on ', port);
module.exports = app;