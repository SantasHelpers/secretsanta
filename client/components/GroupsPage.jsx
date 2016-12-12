// GroupsPage.jsx

import React from 'react';
import axios from 'axios'
import { observer } from 'mobx-react';
import santaStore from './SantaStore';

// not sure if need MOBX here,  will hold off
// group page needs Group name, group 

 var GroupPage = observer(class GroupsPage extends React.Component {
  
  constructor (props) {
    super (props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentWillMount() {
    // make the AJAX call here to get list of users, members, group name and group summary

    console.log(this.props);

    // get the group name thru params
    // axios.post('/api/party', {
    //     username: santaStore.currentUser
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  }

  render() {

    return (
      <div>
        <h2>This is the Groups Page</h2>
      </div>
      );
  }
})

export default GroupPage;