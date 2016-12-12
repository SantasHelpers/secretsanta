// AddUserPage.jsx

import React from 'react';

// not sure if need MOBX here,  will hold off

export default class AddUserPage extends React.Component {
 

   constructor (props) {
    super (props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick (e) {
    e.preventDefault();
    
    var data = {
      username: this.refs.newUser.value,
      name: this.refs.username.value
    };
    /*
    AJAX call here
    */

  };

  render() {
    return (
      <div>
        <h2>This is the Add User Page</h2>
      <h5>Name:</h5><input type="text" name="search" ref="newUser" size="50"/><br/>
      <h5>UserName:</h5><input type="text" name="search" ref="username" size="50"/><br/>
      <button name="button" onClick={this.onButtonClick.bind(this)}>Add User</button>
      </div>
      );
  }
}