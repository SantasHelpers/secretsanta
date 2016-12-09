import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';
import WishListItem from './WishListItem.jsx';

class WishListBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {

  }

  render () {
    return (
      <div>
        <Button block > Add An Item To Wishlist </Button>
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