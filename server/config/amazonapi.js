var aws = require('aws-lib');
var keys = require('./config');
var prodAdv = aws.createProdAdvClient(keys.keyId, keys.secretKey, keys.aId);


var returnFormatted = function(array) {
  var results = [];
  // console.log(array.length);
  if (array.length !== 0) {
    array.forEach(function(val) {
      if (val.ItemAttributes.ListPrice) {
        var item = {
          name: val.ItemAttributes.Title,
          price: val.ItemAttributes.ListPrice.Amount / 100,
          imageURL: val.MediumImage.URL,
          URL: val.DetailPageURL
        };
        if (item.price <= 10) {
          item.category = 'Elf';
        } else if (item.price <= 25) {
          item.category = 'Raindeer';
        } else {
          item.category = 'Santa';
        }
        results.push(item);
      }
    })
  }
  return results;
};


module.exports = function(keyword, cb) {
  console.log(keyword);
  prodAdv.call("ItemSearch", { SearchIndex: 'All', Keywords: keyword, ResponseGroup: 'Medium' }, function(err, result) {
    if(err){
      console.log(err);
    }
    var returnedArray = result.Items.Item;
    console.log('returned',returnedArray);

    // cb(returnFormatted(returnedArray));
  });
};
