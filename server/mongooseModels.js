var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/santasHelpers');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection through mongoose success!');
});

var itemSchema = mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  imageURL: String,
  URL: String,
  price: Number,
  category: String,
  claimed: Boolean
});

var groupSchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    unique: true
  },
  summary: String,
  imageURL: String,
  users: [String],
  targets: []
});

var userSchema = mongoose.Schema({
  username: {
    type: String,
    index: true,
    unique: true
  },
  name: String,
  groups: [String],
  items: [itemSchema],
  pendingGroups: []
});

var Item = mongoose.model('Item', itemSchema);
var Group = mongoose.model('Group', groupSchema);
var User = mongoose.model('User', userSchema);

module.exports = {};
module.exports.Item = Item;
module.exports.Group = Group;
module.exports.User = User;
