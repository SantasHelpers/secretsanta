import axios from 'axios';
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
    axios.post('/api/item', {
      data: {
        user:santaStore.currentUser,
        item: {
          name: this.props.item.name,
          price: this.props.item.price,
          imageURL: this.props.item.imageUrl,
          URL: this.props.item.URL,
          category: this.props.item.category
        }
      }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
//   });
    });
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
          <div className="ItemSearchCategory">
            {this.props.item.category}
            </div>
          <Button onClick={this.addItem}> Add To Wishlist</Button>
        </ListGroupItem>
      );
  }
})

export default ItemSearchResult;