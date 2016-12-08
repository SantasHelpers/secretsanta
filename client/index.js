// TODO: Render the `App` component to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import store from './components/SantaStore.js'

ReactDOM.render(<App/>, document.getElementById('app'));