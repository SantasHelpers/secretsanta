// app.js
// will hold state - the search results and if the list should be displayed

import { Grid, Row, Col, Thumbnail, Button  }  from 'react-bootstrap';
import React from 'react';
import GroupBox from './GroupBox.jsx';
import WishListBox from './WishListBox.jsx';
import PendingBox from './PendingBox.jsx';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';


var App = observer(class App extends React.Component {

  constructor (props) {
    super (props);

    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  } //^ clickhandler, instansiate inside the constructor, and bind it to the context of this

  handleClick () {
    console.log('nice you clicked the page')
  }

  render () {
      return (
        <div id='mainApp'>
          <GroupBox groups={['group1', 'group2', 'group3']} />
          <div id='pendingAndWishList'>
            <PendingBox PendingBoxItems={[{avatar: 'avatar1'}, {avatar: 'avatar2'}]} />
            <WishListBox wishListItems={['cucumber', 'cheese', 'blender']} />
          </div>
        </div>
      );
    };

})


export default App;
