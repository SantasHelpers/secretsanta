import { ListGroup, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar} from 'react-bootstrap';
import React from 'react';
import { Link, IndexLink } from 'react-router';
import GroupItem from './GroupItem.jsx';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';

var GroupBox = observer(class GroupBox extends React.Component { //ES6 class
  
  constructor (props) {
    super (props);
  }

  render () { //needs a button and subcomponent GroupItem
    return ( //wrap this whole thing in a table

      <div id="GroupBox">
        <ButtonToolbar>
        <ul>
          <li><IndexLink to="/">  <Button bsStyle="danger" bsSize="large" block>Home</Button> </IndexLink></li>
          <li><Link to="addgroup"> <Button bsStyle="success" bsSize="large" block>Add Group</Button></Link></li>
          <li><Link to="adduser"> <Button bsStyle="info" bsSize="large" block>Add User</Button></Link></li>
          <li><Link to="additem"> <Button bsStyle="warning" bsSize="large" block>Add Item</Button></Link></li>
        </ul>
        </ButtonToolbar>

        <ListGroup>
          {
            santaStore.groupData.map((group, index) =>
            <GroupItem className="GroupItem" group={group} key={index} />
            )
          }
        </ListGroup>
      </div>
      );
  }
});

export default GroupBox;