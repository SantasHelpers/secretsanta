import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar} from 'react-bootstrap';
import React from 'react';
import WishListItem from './WishListItem.jsx';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';
import axios from 'axios';

var WishListBox = observer(class WishListBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    
  axios.get('/api/item', {
      params: {data: {username: 'phil'}}
    })
  .then(function (response) {
    console.log('items for phil:', response.data);
    santaStore.wishListData = response.data;
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

}


  render () {
    return (
      <div id='WishListBox'>
        <Button block onClick={this.addItem}> Add An Item To Wishlist </Button>
        <ListGroup>
          {
           santaStore.wishListData.map((item, index) =>
              <WishListItem item={item} key={index} />
              )
          }
        </ListGroup>
      </div>
    );
  }
});

export default WishListBox;


