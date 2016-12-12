var app = require('../server.js');
var amazon = require('./amazonapi');
var router = require('express').Router();
var controller = require('../mongooseQueries.js');

var amazonsearch = function(req, res, next) {
  console.log('GET');
  console.log(req.body);
  var keyword = req.body.data;
  // console.log('amazonsearchkeyword', keyword);
  amazon(keyword, function(result) {

    res.status(200).send(result);
  })
};

/////////////////////////// ENDPOINTS
router.route('/api/amazon').get(amazonsearch); //input keyword output searchResults

//USER
router.route('/api/users')
//GET ALL USERS
.get(controller.getAllUsers)
//add user
.post(controller.addUser)

//PARTY
router.route('/api/groups')
//getPartyByUser input: user , output parties
.get(controller.getGroupsByUser)
//add a new group
.post(controller.addGroup);

//ITEM
router.route('/api/item')
//getWishListByUser : input user, output wishList
.get()
//add to user's wishList : input user , item
.post()
//change status to claimed :
.put()

//TARGET INFO
router.route('/api/target')
// get target by user and group
.get();


module.exports = router;


