var app = require('../server.js');
var amazon = require('./amazonapi');
var router = require('express').Router();
var controller = require('../mongooseQueries.js');

var amazonsearch = function(req, res, next) {
  console.log('GET');
  var data = JSON.parse(req.query.data);
  console.log('amazonsearchkeyword', data.keyword);
  amazon(data.keyword, function(result) {
    res.status(200).send(result);
  });
};

/////////////////////////// ENDPOINTS
router.route('/api/amazon').get(amazonsearch); //input keyword output searchResults

//USER
router.route('/api/users')
  //GET ALL USERS
  .get(controller.getAllUsers) //TESTED
  //add user
  .post(controller.addUser); //TESTED

//PARTY
router.route('/api/groups')
  //getPartyByUser input: user , output parties
  .get(controller.getGroupsByUser)
  //add a new group
  .post(controller.addGroup) //
  //add user to group
  .put(); //input user and group, add user to group

//ITEM
router.route('/api/item')
  //getWishListByUser : input user, output wishList
  .get(controller.getWishlistByUser)
  //add to user's wishList : input user , item
  .post(controller.addItemToWishList)
  //change status to claimed : TODO for legacy.
  .put(controller.claimItem);

router.route('/api/getUser')
.get(controller.getUser);

//TARGET INFO
router.route('/api/target')
  // get target by user and group
  .get();


module.exports = router;
