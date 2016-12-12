import { ListGroup, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router';
import GroupItem from './GroupItem.jsx';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';

var GroupBox = observer(class GroupBox extends React.Component { //ES6 class
  constructor (props) {
    super (props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
    this.addGroup = this.addGroup.bind(this);
  }
  handleClick () {
    console.log('why you clicking the box?');
  }

  addGroup () {
    console.log('add group function');
  }


  render () { //needs a button and subcomponent GroupItem
    return ( //wrap this whole thing in a table

      <div id="GroupBox">
        <ButtonToolbar>
        <ul>
          <li><Link to="addgroup">Add Group</Link></li> 
          <li><Link to="adduser">Add User</Link></li> 
          <li><Link to="adduser">Add Item</Link></li> 
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
})

export default GroupBox;