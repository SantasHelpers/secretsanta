// AddUserPage.jsx

import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';

// not sure if need MOBX here,  will hold off


var AddUserPage = observer(class AddUserPage extends React.Component {

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

    axios.post('/api/users', {
      data: data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h2>This is the Add User Page</h2>
        <h5>Name:</h5><input type="text" name="newUser" ref="newUser" size="50"/><br/>
        <h5>UserName:</h5><input type="text" name="username" ref="username" size="50"/><br/>
        <button name="button" onClick={this.onButtonClick.bind(this)}>Add User</button>
      </div>
    );
  }
});

export default AddUserPage;