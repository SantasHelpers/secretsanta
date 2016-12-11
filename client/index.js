// TODO: Render the `App` component to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import store from './components/SantaStore.js'
import axios from 'axios'


axios.get('/api', {
  params: {
    data:'coffee'
  }
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

ReactDOM.render(<App/>, document.getElementById('app'));