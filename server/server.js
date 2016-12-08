var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var aws = require('aws-lib');
var keys = require('./config');
var port = port = process.env.PORT || 8000;

var app = express();




app.use('/', express.static(path.join(__dirname + '/../client')));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.listen(port);
////////////////////////
// Amazon API call

var logAttributes = function(array) {
  console.log(array.length);
  array.forEach(function(val) {
    // console.log(val);
    console.log(val.ItemAttributes.Title);
    if (val.ItemAttributes.ListPrice) {
      console.log(val.ItemAttributes.ListPrice.FormattedPrice);
    }
    console.log(val.MediumImage.URL);
  })
};
prodAdv = aws.createProdAdvClient(keys.keyId, keys.secretKey, keys.aId);
var keyword = 'Cards against Humanity';
var returnedArray = [];

prodAdv.call("ItemSearch", { SearchIndex: 'All', Keywords: keyword, ResponseGroup: 'Medium, Variations' }, function(err, result) {
  returnedArray = result.Items.Item;
  // console.log(returnedArray[1]);
  logAttributes(returnedArray);
});

//////////////////////////////
console.log('listening on ', port);
module.exports = app;
