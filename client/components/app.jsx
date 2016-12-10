// app.js
// will hold state - the search results and if the list should be displayed

import { Grid, Row, Col, Thumbnail, Button  }  from 'react-bootstrap';
import React from 'react';
import GroupBox from './GroupBox.jsx';
import WishListBox from './WishListBox.jsx';
import PendingBox from './PendingBox.jsx';


//import { Grid } from 'react-bootstrap';
//"react's require statement. looks to find a match in ReactBootstrap"

class App extends React.Component {

  constructor (props) {
    super (props);

    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  } //^ clickhandler, instansiate inside the constructor, and bind it to the context of this

  handleClick () {
    console.log('nice you clicked the page')
  }

  // this will make a post request to the API to save a meal when the user clicks on the photo
  saveToDatabase () {

  }

   render () {
      return (
        <div>
          <GroupBox groups={['group1', 'group2', 'group3']} />
          <PendingBox PendingBoxItems={[{avatar: 'avatar1'}, {avatar: 'avatar2'}]} />
          <WishListBox wishListItems={['cucumber', 'cheese', 'blender']} />
        </div>
      );
    };
}

export default App;
