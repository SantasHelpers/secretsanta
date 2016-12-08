var Sequelize = require('sequelize');

var sequelize = new Sequelize('mysql://root:@localhost:3306/santasHelpers');

var User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName : true // Model tableName will be the same as the model name
});

var Party = sequelize.define('party', {
  name: {
    type: Sequelize.STRING
  },
  summary: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName : true
});

var Item = sequelize.define('item', {
  name: {
    type: Sequelize.STRING
  },
  imageURL: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName : true
});

//join tables
var UserParty = sequelize.define('userparty', {
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User
    }
  },
  party_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Party
    }
  },
  match: {
    type: Sequelize.INTEGER,
    references: {
      model: User
    }
  },
  admin: {
    type: Sequelize.BOOLEAN
  }
});

var UserItem = sequelize.define('useritem', {
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User
    }
  },
  item_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Item
    }
  },
  buyer: {
    type: Sequelize.INTEGER,
    references: {
      model: User
    }
  },
  party: {
    type: Sequelize.INTEGER,
    references: {
      model: Party
    }
  }
});

//Many to many relationship definitions
User.belongsToMany(Party, {through: UserParty});
Party.belongsToMany(User, {through: UserParty});

Item.belongsToMany(User, {through: UserItem});
User.belongsToMany(Item, {through: UserItem});

//Example: use this to add parties to a user
//user.addParty(party, {buyingFor})

//Sync creates database and tables if not exists
//Set force to true if you want to drop and replace the tables
// sequelize.sync({force: true});
