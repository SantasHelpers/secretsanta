var aws = require('aws-lib');
var keys = require('./config');
var returnFormatted = function(array) {
  var results = [];
  // console.log(array.length);
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
      // console.log(item);
      results.push(item);
    }
  })
  return results;
};


module.exports = function(keyword) {
  prodAdv = aws.createProdAdvClient(keys.keyId, keys.secretKey, keys.aId);

  prodAdv.call("ItemSearch", { SearchIndex: 'All', Keywords: keyword, ResponseGroup: 'Medium' }, function(err, result) {
    var returnedArray = result.Items.Item;
    // console.log(returnedArray);
    // console.log(returnedArray[1]);
    return returnFormatted(returnedArray);
  });
};
