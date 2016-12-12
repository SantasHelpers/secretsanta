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
      // console.log(user);
      // res.send(user);
      cb(user);
    });
};

var findUserGroup = function(passedUsername, passedGroupName) {
  findUserByUsername(passedUsername, function(user) {
    console.log(user.groups);
    res.send(user.groups);
  });
};

// Controllers
var getUser = function(req, res) {
  findUserByUsername(req.body.username, function(user) {
    res.send(user);
  });
};

var getWishlistByUser = function(req, res) {
  findUserByUsername(req.body.username, function(user) {
    res.send(user.items);
  });
};

var getUserGroupMemberList = function(req, res) {
  findUserByUsername(req.body.username, function(user) {
    var group = user.groups.filter((el) => el.name === req.body.groupname);
    console.log(group);
    res.send(group);
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
  console.log('getgroupsbyuserdata',req.body.data);
  User.find(req.body.data).then(function(err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log('sendinggroupsbyuser');
      res.send(user.groups);
    }
  });
}

var addUser = function(req, res) {
  console.log(req.body.data);
  User.create(req.body.data, function(err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log(success);
      console.log('added new user');
    }
  });
}
var addGroup = function(req, res) {
  console.log(req.body.data);
  Group.create(req.body.data, function(err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log('added new group');
    }
  });
}
module.exports.addUser = addUser;
module.exports.addGroup = addGroup;
module.exports.getAllUsers = getAllUsers;
module.exports.getGroupsByUser = getGroupsByUser;

//////TEST QUERIES//////
// findUserByUsername('Johnson');
// getWishlistByUser({body:{username:'Johnson'}},{});
// getUserGroupMemberList({body: { username: 'Johnson', groupname: 'hr50'}}, {});
// getAllUsers();


// models.User.find({username:'Johnson'})
// .then(function(user) {
//   console.log(user);
// });


////////////////////Initialize dummy data////////////////////
// var newUser = new models.User({
//   username: 'Johnson',
//   groups: [
//     {
//       name: 'hr50',
//       summary: 'this is a group of awesome shazzam',
//       imageURL: 'http://www.dumbimage.com/images/img.img',
//       users: ['Johnson', 'Juli', 'Jered']
//     }
//   ],
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
// newUser.save(function(err, user) {
//   if (err) { console.log(err); }
//   console.log('successfully saved ', user.get('username'));
// });
//////////////////////////////////////////////////////////////////


// app.get('/api/user/wishList');  // FEED USER GET ITEMLIST

// app.get('/api/user/party',);    // FEED USER GET PARTYLIST

// app.get('/api/user/pending');   // FEED USER GET PENDING LIST

// app.get('/api/party',)          // FEED USER PARTY GET (USERLIST, INFO), TARGET

// app.get('/api/user',);          // GET ALL USERS TO SELECT WHO TO ADD TO GROUP

// app.post('/api/item/claim',);   // FEED ITEM AND USER TO CHANGE STATUS CLAIMED

// app.post('/api/item/add',);     // FEED ITEM AND USER TO SAVE TO DB

// app.post('/api/user/add',);     // FEED USER TO ADD TO USERLIST
