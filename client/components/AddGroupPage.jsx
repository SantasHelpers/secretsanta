//AddGroupPage.jsx

import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';

// not sure if need MOBX here,  will hold off

var AddGroupPage = observer(class AddGroupPage extends React.Component {

  constructor (props) {
    super (props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick (e) {
    e.preventDefault();

    var data = {
      username: santaStore.currentUser,
      group: {
        name: this.refs.group.value,
        summary: this.refs.summary.value
      }
    };

    console.log(this.refs.summary.value);

    axios.post('/api/groups', {
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
        <h2>This is the Add Group Page</h2>
        <h5>Group:</h5><input type="text" name="group" ref="group" size="50"/><br/>
        <h5>Tell us about your Group</h5> <br/>
        <textarea type="text" name="summary" ref="summary" rows="20" cols="100"/> <br/>
        <button name="button" onClick={this.onButtonClick.bind(this)}>Add Group</button>
      </div>
    );
  }
});

export default AddGroupPage;