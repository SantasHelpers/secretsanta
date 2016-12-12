var groupData = require('./fakeGroupdata.js');
var userData = require('./fakeUserData.js');
var models = require('./server/mongooseModels.js');
var Promise = require('bluebird');
var User = models.User;
var Group = models.Group;
var Item = models.Item;

// console.log(groupData);
// console.log(userData);
console.log(groupData.length);
console.log(userData.length);

for (var i = 0; i < groupData.length; i++) {
  Group.create(groupData[i]).then(function(err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log('success', success);
    }
  });
}


for (var i = 0; i < userData.length; i++) {
  User.create(userData[i]).then(function(err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log(success);
    }
  });
}
