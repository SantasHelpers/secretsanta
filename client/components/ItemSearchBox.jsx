import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar} from 'react-bootstrap';
import React from 'react';
import ItemSearchResult from './ItemSearchResult.jsx';
import { observer } from 'mobx-react';
import santaStore from './SantaStore'
import { IndexLink } from 'react-router';

var ItemSearchBox = observer(class ItemSearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
        <div id ='ItemSearchBox'>
          <IndexLink to="/">
            <Button bsStyle="info" bsSize="large"  block>View Your Wishlist</Button> 
          </IndexLink>
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
});

export default ItemSearchBox;