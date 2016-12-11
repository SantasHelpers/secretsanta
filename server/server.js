var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var routes = require('./config/routes');
var port = port = process.env.PORT || 8000;


var app = express();

app.use('/', express.static(path.join(__dirname + '/../client')));
app.use(express.static('../client'));
app.use(express.static('../dist'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(routes);

app.listen(port);
////////////////////////
// Amazon API call

// var returnFormatted = function(array) {
//   var results = [];
//   // console.log(array.length);
//   array.forEach(function(val) {
//     if (val.ItemAttributes.ListPrice) {
//       var item = {
//         name: val.ItemAttributes.Title,
//         price: val.ItemAttributes.ListPrice.Amount / 100,
//         imageURL: val.MediumImage.URL,
//         URL: val.DetailPageURL
//       };
//       if (item.price <= 10) {
//         item.category = 'Elf';
//       } else if (item.price <= 25) {
//         item.category = 'Raindeer';
//       } else {
//         item.category = 'Santa';
//       }
//       // console.log(item);
//       results.push(item);
//     }
//   })
//   return results;
// };

// prodAdv = aws.createProdAdvClient(keys.keyId, keys.secretKey, keys.aId);
// var keyword = 'Cards against Humanity';
// var returnedArray = [];

// prodAdv.call("ItemSearch", { SearchIndex: 'All', Keywords: keyword, ResponseGroup: 'Medium' }, function(err, result) {
//   returnedArray = result.Items.Item;
//   // console.log(returnedArray[1]);
//   returnFormatted(returnedArray);
// });


//////////////////////////////
//////////////////////////////
console.log('listening on ', port);




module.exports = app;
