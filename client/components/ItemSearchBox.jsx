import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';
import ItemSearchResult from './ItemSearchResult.jsx';
import { observer } from 'mobx-react';
import santaStore from './SantaStore'

var ItemSearchBox = observer(class ItemSearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
    this.returnToWishList = this.returnToWishList.bind(this);
  }

  handleClick () {

  }

  returnToWishList () {
    //will render currentwish list
  }

  render () {
    return (
        <div id = 'ItemSearchBox'>
          <Button block onClick={this.returnToWishList}>View Your Wishlist </Button>
          <ListGroup>
            {
             santaStore.itemSearchData.map((item, index) =>
                <ItemSearchResult item={item} key={index} />
              )
            }
          </ListGroup>
        </div>
      );
  }
})

export default ItemSearchBox;