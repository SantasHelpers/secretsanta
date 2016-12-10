import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';
import PendingItem from './PendingItem.jsx';

class PendingBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render () {
    return (
      <div id='PendingBox'>
        <Button block>PENDING BOX</Button>
        <ListGroup>
          {this.props.PendingBoxItems.map( (item, index) =>
            <PendingItem item={item} key={index}/>
            )
          }
        </ListGroup>
      </div>
      );
  }
}

export default PendingBox;