import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar} from 'react-bootstrap';
import React from 'react';
import WishListItem from './WishListItem.jsx';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';
import axios from 'axios';

var WishListBox = observer(class WishListBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleClick () {
    console.log('why you clicking the whole box for idiot');
  }

  addItem() {
    console.log('adding item functionality not yet built');
  }

  componentWillMount() {
    console.log('wishlistboxcomponentwillmount');
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
              // maybe wrap this in a Div and put click handler on it to add ti list?  other
              // wise we may have to rebuild a new wish list item
              )
          }
        </ListGroup>
      </div>
    );
  }
});

export default WishListBox;


