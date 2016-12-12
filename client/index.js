// TODO: Render the `App` component to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import store from './components/SantaStore.js'
import axios from 'axios'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'


// import route level components here
import App from './components/App.jsx'
import UserPage from './components/UserPage.jsx'
import GroupsPage from './components/GroupsPage.jsx'
import AddGroupPage from './components/AddGroupPage.jsx'
import AddItemPage from './components/AddItemPage.jsx'
import AddUserPage from './components/AddUserPage.jsx'

// axios.get('/api/amazonsearch', {
//   params: {
//     data:'coffee'
//   }
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   axios.post('/api/users', {
//     data: {username:'username1',
//     name:'user1'}
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
  // axios.get('/api/groups', {
  //     params: {
  //     data: {username:'test'}
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={UserPage}></IndexRoute>
        <Route path="groups" name="groups" component={GroupsPage}></Route>
        <Route path="addgroup" name="addgroup" component={AddGroupPage}></Route>
        <Route path="additem" name="additem" component={AddItemPage}></Route>
        <Route path="adduser" name="adduser" component={AddUserPage}></Route>
    </Route>
  </Router>
  ,document.getElementById('app'));

  //<App/>, document.getElementById('app'));