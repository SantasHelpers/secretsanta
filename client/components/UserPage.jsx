//UserPage.jsx
import React from 'react';
import WishListBox from './WishListBox.jsx';
import PendingBox from './PendingBox.jsx';

// not sure if need MOBX here,  will hold off

export default class UserPage extends React.Component {
  render() {

    return (
      <div>
        <PendingBox PendingBoxItems={[{avatar: 'avatar1'}, {avatar: 'avatar2'}]} />
        <WishListBox/>
      </div>
      );
  }
}