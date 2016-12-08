-- DROP DATABASE santasHelpers;
CREATE DATABASE santasHelpers;

USE santasHelpers;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50),
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  password VARCHAR(50),
  PRIMARY KEY (user_id)
);

CREATE TABLE groups (
  group_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  summary TEXT,
  category VARCHAR(50),
  PRIMARY KEY (group_id)
);

CREATE TABLE items (
  item_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  imageURL VARCHAR(255),
  price DECIMAL(10,2),
  category VARCHAR(50),
  PRIMARY KEY (item_id)
);

-- join tables

CREATE TABLE users_groups (
  user_group_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  group_id INT NOT NULL,
  PRIMARY KEY (user_group_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
  ON DELETE CASCADE,
  FOREIGN KEY (group_id) REFERENCES groups(group_id)
  ON DELETE CASCADE
);

CREATE TABLE users_items (
  user_item_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  item_id INT NOT NULL,
  PRIMARY KEY (user_item_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
  ON DELETE CASCADE,
  FOREIGN KEY (item_id) REFERENCES items(item_id)
  ON DELETE CASCADE
);
