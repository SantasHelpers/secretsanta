var app = require('../server.js');
var amazon = require('./amazonapi');
var router = require('express').Router();

var GETREQUEST = function(req, res, next) {
  console.log('GET');
  var keyword = req.body;
  amazon(keyword, function(result) {

    res.status(200).send(result);
  })
};

var POST = function() {
  console.log('POST');
};
/////////////////////////// ENDPOINTS
router.route('/api').get(GETREQUEST);
router.route('api/user/party')
module.exports = router;

// module.exports = function(app, express) {
//   app.get('/api', GETREQUEST ); // FEED USER GET ITEMLIST

// app.get('/api/user/wishlist', GETREQUEST); // FEED USER GET ITEMLIST
// app.get('/api/user/party', GET); // FEED USER GET PARTYLIST
// app.get('/api/user/pending', GET); // FEED USER GET PENDING LIST
// app.get('/api/party', GET) // FEED USER PARTY GET USERLIST, INFO, TARGET
// app.get('/api/user', GET); // GET ALL USERS TO SELECT WHO TO ADD TO GROUP
// app.post('/api/item/claim', POST); // FEED ITEM AND USER TO CHANGE STATUS CLAIMED
// app.post('/api/item/add', POST); // FEED ITEM AND USER TO SAVE TO DB
// app.post('/api/user/add', POST); // FEED USER TO ADD TO USERLIST
// };
