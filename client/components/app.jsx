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
          <GroupBox groups={[
  {
    name: 'HR50',
    summary: 'hackreactor\' best cohort!',
    imageUrl: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
    users: ['Tyler', 'Joosang', 'Phil', 'Fiona']
  },
  {
    name: 'Family',
    summary: 'Smith Family\'s ANNUAL SECRET SANTA!',
    imageUrl: 'http://www.w3schools.com/css/trolltunga.jpg',
    users: ['Jason', 'Junebug', 'Anakin']
  },
  {
    name: 'The Fellowship Of The Ring',
    summary: 'For the brave 9 that began the trek to Morder. Celebrate Christmas with the crew, rehash old times',
    imageUrl: 'http://i164.photobucket.com/albums/u8/hemi1hemi/COLOR/COL9-6.jpg',
    users: ['Frodo', 'Sam', 'Pip', 'Aragorn', 'Boromir', 'Gandalf', 'Gimili', 'Legolas', 'Mary']
  },
  {
    name: '1',
    summary: '2',
    imageUrl: 'http://hdwallpapershdpics.com/wp-content/uploads/2015/08/download-images-of-gentle-dogs-6866.jpg',
    users: ['A', 'B', 'C']
  },
]} />
          <div id='pendingAndWishList'>
            <PendingBox PendingBoxItems={[{avatar: 'avatar1'}, {avatar: 'avatar2'}]} />
            <WishListBox wishListItems={[]} />
          </div>
        </div>
      );
    };
})


export default App;
