var mongoose = require('mongoose');
var models = require('./mongooseModels.js');
var Promise = require('bluebird');
var User = models.User;
var Group = models.Group;
var Item = models.Item;

// Helpers
var findUserByUsername = function(passedUsername, cb) {
  User.findOne({ username: passedUsername })
  .then(function(user) {
    cb(user);
  });
};

var findGroupByName = function(passedGroupName, cb) {
  Group.findOne({name: passedGroupName })
  .then(function(group) {
    cb(group);
  });
};

// Controllers
var getUser = function(req, res) {
  findUserByUsername(req.body.username, function(user) {
    res.send(user);
  });
};

var getWishlistByUser = function(req, res) {
  findUserByUsername(req.body.data, function(user) {
    res.send(user.items);
  });
};

var getGroupMemberList = function(req, res) {
  var passedGroupName = req.body.data.groupname;
  findGroupByName(passedGroupName, function(group) {
    console.log('Group members for ' + passedGroupName + ': ' + group.get('users'));
    res.send(group.get('users'));
  });
};

var getAllUsers = function(req, res) {
  User.find({})
    .then(function(user) {
      console.log(user);
      res.send(user);
    });
};

var getGroupsByUser = function(req, res) {
  var passedUsername = req.body.data.username;
  findUserByUsername(passedUsername, function(user) {
    Group.find({'_id':
      {$in: user.get('groups')}
    }, function(err, data) {
      console.log(err, data);
      res.send(data);
    });
  });
};

var addUser = function(req, res) {
  console.log('body.data', req.body.data);
  req.body.data.items = [];
  User.create(req.body.data, function(err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log(success);
      console.log('added new user');
    }
  });
};

var addGroup = function(req, res) {
  console.log(req.body.data);
  Group.create(req.body.data.group, function(err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log('added new group');
    }
  });
};

var addItemToWishList = function(req, res) {
  console.log('in addItemToWishList');
  // console.log(req.body.data.user);
  // console.log(req.body.data.item);
  User.findOne(req.body.data.user, function(err, user) {
    if (err) {
      console.log('error');
      console.log(err);
    } else {
      if (!user.items) {
        user.items = [];
      }
      user.items.push(req.body.data.item);
      // console.log('items', User.items);
      user.save(function(err, updatedUser) {
        if (err) {
          console.log(err);
        } else {
          res.send(updatedUser);
        }
      });
    }
  });
};

var addUserToGroup = function(req, res) {
  var groupToAdd = req.body.data.groupname;
  var userToAdd = req.body.data.username;
  console.log('adding user: ' + userToAdd + ' to group: ' + groupToAdd);
  models.Group.findOneAndUpdate({name: groupToAdd},
    {$push: {users: userToAdd}}, function(err, data) {
      console.log(err, data);
    }
  );
  models.Group.findOne({name: groupToAdd})
  .then(function(foundGroup) {
    console.log(foundGroup);
    models.User.findOneAndUpdate({username: userToAdd},
      {$push: {groups: foundGroup.get('_id')}}, function(err, data) {
      }
    );
  });
};

var setRandomTargets = function(req, res) {
  var passedGroupName = req.body.data.groupname;
  var results = [];
  findGroupByName(passedGroupName, function(group) {
    console.log(group);
    var userList = Array.from(group.get('users'));
    var randUsers = [];
    for (var i = userList.length; i > 0; i--) {
      var randIndex = Math.floor(Math.random() * userList.length);
      var selectedUser = userList.splice(randIndex, 1);
      // console.log(selectedUser);
      randUsers.push(selectedUser[0]);
    }
    for (var j = 0; j < randUsers.length; j++) {
      var target = [randUsers[j], randUsers[(j + 1) % (randUsers.length)]];
      results.push(target);
    }
    console.log('RESULTS = ', results);
    models.Group.findOneAndUpdate({name: passedGroupName},
      {$set: {targets: results}}, function(err, data) {
        console.log(err, data);
      }
    );
  });
};

//Get target (name, username) for group

module.exports.addUser = addUser;
module.exports.addGroup = addGroup;
module.exports.getAllUsers = getAllUsers;
module.exports.getGroupsByUser = getGroupsByUser;
module.exports.addItemToWishList = addItemToWishList;
module.exports.getWishlistByUser = getWishlistByUser;
module.exports.setRandomTargets = setRandomTargets;

//////TEST QUERIES////// Use these as examples
// findUserByUsername('Johnson');
// getWishlistByUser({body: {username: 'Juli'}}, {});
// getGroupMemberList({body: {data: {groupname: 'TESTGROUP'}}}, {});
// getAllUsers();
getGroupsByUser({body: {data: {username: 'Juli'}}}, {});
// deleteItemFromUserWishlist({body: {username: 'Juli', deleteitem: 'test item'}});
// addUserToGroup({body: {data: {username: 'Johnson', groupname: 'hr50' }}}, {});
// addUserToGroup({body: {data: {username: 'Johnson', groupname: 'TESTGROUP' }}}, {});
// addUserToGroup({body: {data: {username: 'Juli', groupname: 'TESTGROUP' }}}, {});
// setRandomTargets({body: {data: {groupname: 'TESTGROUP'}}}, {});

////////////////////Initialize dummy data////////////////////
// var newGroup = new models.Group({
//   name: 'TESTGROUP',
//   summary: 'this group is for testing the add user to group functionality'
// });
//
// var newGroup2 = new models.Group({
//   name: 'hr50',
//   summary: 'hr50 group summary'
// });
//
// var newUser = new models.User({
//   username: 'Johnson',
//   items: [
//     {
//       name: 'test item',
//       imageURL: 'http://www.testitem.com/images/testitem.img',
//       price: 150,
//       category: 'elf'
//     }
//   ]
// });
//
// var newUser2 = new models.User({
//   username: 'Juli',
//   items: [
//     {
//       name: 'test item',
//       imageURL: 'http://www.testitem.com/images/testitem.img',
//       price: 150,
//       category: 'elf'
//     },
//     {
//       name: 'Juli\'s favorite item',
//       imageURL: 'http://www.testitem.com/images/testitem.img',
//       price: 150,
//       category: 'reindeer'
//     }
//   ]
// });
//
//
// newGroup.save(function(err, group) {
//   if (err) { console.log(err); }
//   console.log('successfully saved ', group.get('name'));
// });
//
// newGroup2.save(function(err, group) {
//   if (err) { console.log(err); }
//   console.log('successfully saved ', group.get('name'));
// });
//
// newUser.save(function(err, user) {
//   if (err) { console.log(err); }
//   console.log('successfully saved ', user.get('username'));
// });
//
// newUser2.save(function(err, user) {
//   if (err) { console.log(err); }
//   console.log('successfully saved ', user.get('username'));
// });
//////////////////////////////////////////////////////////////////

//USER
//GET ALL USERS
//add user
//PARTY
//getPartyByUser input: user , output parties
//add a new group
//ITEM
//getWishListByUser : input user, output wishList
//add to user's wishList : input user , item
//change status to claimed :
//TARGET INFO
// get target by user and group
