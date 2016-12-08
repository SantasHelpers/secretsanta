var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var aws = require('aws-lib');
var keys = require('./config');
var port = port = process.env.PORT || 8000;

var app = express();


var checkAttributes = function(array) {
  console.log(array.length);
  array.forEach(function(val) {
    console.log(val.ItemAttributes);
  })
};


app.use('/', express.static(path.join(__dirname + '/../client')));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.listen(port);

prodAdv = aws.createProdAdvClient(keys.keyId, keys.secretKey, keys.aId);
var keyword = 'Cards against humanity';
var returnedArray = [];

prodAdv.call("ItemSearch", { SearchIndex: 'All', Keywords: keyword }, function(err, result) {
  // console.log(JSON.stringify(result.Items.Item));
  returnedArray = result.Items.Item;
  // console.log(Array.isArray(returnedArray));
  checkAttributes(returnedArray);
});
console.log('returnedArray', returnedArray);

// checkAttributes(returnedArray);



console.log('listening on ', port);
module.exports = app;
