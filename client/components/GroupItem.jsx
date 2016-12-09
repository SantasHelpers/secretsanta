import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar  }  from 'react-bootstrap';
import React from 'react';

class GroupItem extends React.Component {
  constructor (props) {
    super (props);

    this.state = {

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log('want this to redirect later');
    //redirect to the group page, or render the group page
  }

  render () {
    return (
      <ListGroupItem header={this.props.group} onClick={this.handleClick}>
        <img className="GroupAvatar" src={this.props.avatar} />
       {"small group description passed as prop later"}
      </ListGroupItem>
      );
  }

}



export default GroupItem;