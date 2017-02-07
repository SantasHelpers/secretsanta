// TODO: Render the `App` component to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import santaStore from './components/SantaStore.js';
import axios from 'axios';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


// import route level components here
import App from './components/App.jsx';
import UserPage from './components/UserPage.jsx';
import GroupsPage from './components/GroupsPage.jsx';
import AddGroupPage from './components/AddGroupPage.jsx';
import AddItemPage from './components/AddItemPage.jsx';
import AddUserPage from './components/AddUserPage.jsx';

// axios.get('/api/groups', {
//   params:{
//      data: {username:store.currentUser}
//     }
//   })
//  .then(function (response) {
//    console.log('groupdata done');
//    santaStore.groupData = response.data;
//    console.log('updatedGroupData', store.groupData);
//  })
//   .catch(function (error) {
//    console.log('error on getting groupdata');
//    console.log(error);
// });


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={UserPage}></IndexRoute>

        { /* this makes a recursive webpage.
          <Route path="tohome" name="tohome" component={App}></Route>*/}
        <Route path="groups/:group" name="groups" component={GroupsPage}></Route>
        <Route path="addgroup" name="addgroup" component={AddGroupPage}></Route>
        <Route path="additem" name="additem" component={AddItemPage}></Route>
        <Route path="adduser" name="adduser" component={AddUserPage}></Route>
    </Route>
  </Router>
  , document.getElementById('app'));
