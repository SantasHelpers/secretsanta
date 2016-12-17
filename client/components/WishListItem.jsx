import { ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar} from 'react-bootstrap';
import React from 'react';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';

var WishListItem = observer(class WishListItem extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <ListGroupItem> <a href={this.props.item.URL} target="_blank">
          <img className="WishListImage" src={this.props.item.imageURL} />
          <div className="WishListTitle">
            {this.props.item.name}</div>
          <div className="WishListPrice">
            {this.props.item.price}
          </div>
          </a>
        </ListGroupItem>
    );
  }
});

export default WishListItem;