import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar} from 'react-bootstrap';
import React from 'react';
import PendingItem from './PendingItem.jsx';
import santaStore from './SantaStore';

class PendingBox extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}


  render () {

    var pendingList = santaStore.pendingList;

    return (
      <div id='PendingBox'>
        <Button block>Pending Box</Button>
        <ListGroup>
          {pendingList.map((item, index) =>
            <PendingItem item={item} key={index}/>
            )
          }
        </ListGroup>
      </div>
    );
  }
}

export default PendingBox;