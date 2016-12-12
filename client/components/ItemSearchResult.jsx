import { ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';

var ItemSearchResult = observer(class ItemSearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleClick() {
    //this can show a detailed page or something
      //i.e, what does user get if they click the item but not the add button
  }

  addItem() {
    //this will send post request to server
  }

  render () {
    return (
        <ListGroupItem onClick = {this.handleClick}>
          <img className="ItemSearchImage" src={this.props.item.imageURL} />
          <div className="ItemSearchTitle">
            {this.props.item.name}</div>
          <div className="ItemSearchPrice">
            {this.props.item.price}
          </div>
          <Button block onClick={this.addItem}> Add To Wishlist</Button>
        </ListGroupItem>
      );
  }
})

export default ItemSearchResult;