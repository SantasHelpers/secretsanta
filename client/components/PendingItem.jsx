import { ListGroup, ListGroupItem, Nav, NavItem, Grid, Row, Col, Thumbnail, Button, ButtonToolbar} from 'react-bootstrap';
import React from 'react';

class PendingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('take them to the wishlist of the target');
  }

  render () {
    return (
        <ListGroupItem className="PendingItem">
          <img className="TargetAvatar" src={this.props.avatar} />
          <div>{this.props.item.avatar}</div>
          <div>{'GroupName'} </div>
          <div>{'due date of group'}</div>
          <div onClick={this.handleClick}>{'Take me to their wishlist'}</div>
        </ListGroupItem>
    );
  }

}


export default PendingItem;
