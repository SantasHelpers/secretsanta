import { ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';

var WishListItem = observer(class WishListItem extends React.Component {
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
          <img className="WishListImage" src={this.props.item.imageURL} />
          <div className="WishListTitle">
            {this.props.item.name}</div>
          <div className="WishListPrice">
            {this.props.item.price}
          </div>
        </ListGroupItem>
      );
  }
})

export default WishListItem;