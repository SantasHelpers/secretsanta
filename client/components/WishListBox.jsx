import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';
import WishListItem from './WishListItem.jsx';

class WishListBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleClick () {
    console.log('why you clicking the whole box for idiot');
  }

  addItem() {
    console.log('adding item functionality not yet built');
  }

  render () {
    return (
      <div className='WishListBox'>
        <Button block onClick={this.addItem}> Add An Item To Wishlist </Button>
        <ListGroup>
          {this.props.wishListItems.map( (item, index) =>
            <WishListItem item={item} key={index} />
            )
          }
        </ListGroup>
      </div>
      );
  }
}

export default WishListBox;