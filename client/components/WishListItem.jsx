import { ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';

class WishListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('this will redirect to the item page on amazon');
  }


  render () {
    return (
        <ListGroupItem onClick={this.handleClick}>
          <img className="WishListImage" src={this.props.image} />
          <div className="WishListTitle">
            {this.props.item}</div>
          <div className="WishListPrice">
            {this.props.price}
          </div>
        </ListGroupItem>
      );
  }
}

export default WishListItem;