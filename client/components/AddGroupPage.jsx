//AddGroupPage.jsx

import React from 'react';
import axios from 'axios'

// not sure if need MOBX here,  will hold off

export default class AddGroupPage extends React.Component {

   constructor (props) {
    super (props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick (e) {
    e.preventDefault();
    
    var data = {
      group: this.refs.group.value
    };

    axios.post('/api/groups', {
      params: {
        data: data
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  render() {
    return (
      <div>
        <h2>This is the Add Group Page</h2>
        <h5>Group:</h5><input type="text" name="group" ref="group" size="50"/><br/>
        <button name="button" onClick={this.onButtonClick.bind(this)}>Add Group</button>
      </div>
      );
  }
}