var aws = require('aws-lib');
var keys = require('./config');
var prodAdv = aws.createProdAdvClient(keys.keyId, keys.secretKey, keys.aId);
var client = require('../redis.js');
// console.log(client);
client.set('string key', 'string val');
client.get('string key', function(err, val) {
  console.log('log', val);
});


var returnFormatted = function(array) {
  var results = [];
  // console.log(array.length);
  if (array.length !== 0) {
    array.forEach(function(val) {
      if (val.ItemAttributes.ListPrice && val.MediumImage) {
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
    });
  }
  return results;
};



module.exports = function(keyword, cb) {
  client.get(keyword, function(err, val) {
    if (val) {
      console.log('found', keyword);
      cb(JSON.parse(val));
    } else {
      console.log('notFound');
      prodAdv.call('ItemSearch', { SearchIndex: 'All', Keywords: keyword, ResponseGroup: 'Medium' }, function(err, result) {
        if (err) {
          console.log(err);
        }
        var returnedArray = result.Items.Item;
        var formatted = returnFormatted(returnedArray);
        cb(formatted);
        client.set(keyword, JSON.stringify(formatted));
      });
    }
  });
};
