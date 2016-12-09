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
    if (val.ItemAttributes.ListPrice) {
      // console.log(val);
      console.log(val.ItemAttributes.Title);
      console.log(val.ItemAttributes.ListPrice.FormattedPrice);
      console.log(val.MediumImage.URL);
      console.log(val.DetailPageURL);
    }
  })
};

prodAdv = aws.createProdAdvClient(keys.keyId, keys.secretKey, keys.aId);
var keyword = 'Cards against Humanity';
var returnedArray = [];

prodAdv.call("ItemSearch", { SearchIndex: 'All', Keywords: keyword, ResponseGroup: 'Medium' }, function(err, result) {
  returnedArray = result.Items.Item;
  // console.log(returnedArray[1]);
  logAttributes(returnedArray);
});


//////////////////////////////
//////////////////////////////
console.log('listening on ', port);
///////////////////////////// ENDPOINTS
// app.get('/api/user/wishList');  // FEED USER GET ITEMLIST
// app.get('/api/user/party',);    // FEED USER GET PARTYLIST
// app.get('/api/user/pending');   // FEED USER GET PENDING LIST
// app.get('/api/party',)          // FEED USER PARTY GET USERLIST, INFO, TARGET
// app.get('/api/user',);          // GET ALL USERS TO SELECT WHO TO ADD TO GROUP
// app.post('/api/item/claim',);   // FEED ITEM AND USER TO CHANGE STATUS CLAIMED
// app.post('/api/item/add',);     // FEED ITEM AND USER TO SAVE TO DB
// app.post('/api/user/add',);     // FEED USER TO ADD TO USERLIST





module.exports = app;
