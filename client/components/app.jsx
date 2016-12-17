// app.js
// will hold state - the search results and if the list should be displayed

import { Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import React from 'react';
import GroupBox from './GroupBox.jsx';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';
import axios from 'axios';


var App = observer(class App extends React.Component {

  constructor (props) {
    super (props);
    this.handleClick = this.handleClick.bind(this);

  } 


  componentWillMount(){

    // axios.get('/api/groups', {
    //     params: {data: {username: 'phil'}}
    // })
    // .then(function (response) {
    //  console.log('groups for phil:', response);
    //   santaStore.groupData = response;
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // // GET WishList user is a member of
    // axios.get('/api/item', {
    //     username: 'Phil'
    // })
    // .then(function (response) {
    //  // console.log(response);
    //   santaStore.currentUser = 'Phil';
    //   santaStore.wishListData = response;
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // // // GET PendingList user is a member of
    // // axios.get('/api/getUser', {
    // //     data: {username: 'Phil'}
    // // })
    // // .then(function (response) {
    // //  // console.log(response);
    // //   santaStore.pendingList = response;
    // // })
    // // .catch(function (error) {
    // //   console.log(error);
    // // });

    // // GET All user is a member of
    // axios.get('/api/users')
    // .then(function (response) {
    //  console.log("all users, ", response);
    //   santaStore.allUsers = response.data;
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  // }


  }
  componentWillMount() {
    axios.get('/api/groups', {
      params: {data: {username: 'phil'}}
    })
    .then(function (response) {
      console.log('groups for phil:', response.data);
      santaStore.groupData = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.put('/api/item',
      {username: 'joos',
        itemname: 'TOMOKO 87 Key Mechanical Keyboard, Water-Resistant Mechanical Gaming Keyboard with Blue Switch, Anti-ghosting Keys (Black)'
      })
 .then(function (response) {
   console.log('item claim success');
   console.log(response.data);

 })
  .catch(function (error) {
    console.log(error);
  });

  }

  handleClick () {
    console.log('nice you clicked the page');
  }

  render () {
    return (
        <div id='mainApp'>
          <GroupBox/>
          <div id='pendingAndWishList'>
            {this.props.children}
          </div>
        </div>
    );
  }
});


export default App;

