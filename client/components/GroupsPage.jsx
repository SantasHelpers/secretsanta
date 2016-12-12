// GroupsPage.jsx
import { ListGroup, ListGroupItem }  from 'react-bootstrap';
import React from 'react';
import axios from 'axios'
import { observer } from 'mobx-react';
import santaStore from './SantaStore';

// not sure if need MOBX here,  will hold off
// group page needs Group name, group 

 var GroupPage = observer(class GroupsPage extends React.Component {
  
  constructor (props) {
    super (props);

  }

  componentWillReceiveProps() {
    var selectedGroup = this.props.params.group;

    santaStore.groupData.forEach((group, index) =>{
      if (group.name === selectedGroup){
        console.log('found it : ', index);
        santaStore.currentGroup = index;
      }
    })

  }

  render() {

    var current = santaStore.currentGroup;
    var group = santaStore.groupData[current];
    var sliced = group.users.slice();

    return (
      <div>
        <h2>This is the {group.name} Page</h2>

        <p>{group.summary}</p>

          <ListGroup>
            {
             sliced.map((user, index) =>
                <ListGroupItem user={user} key={index}>{user}</ListGroupItem>
              )
            }
          </ListGroup>
      </div>
      );
  }
})


export default GroupPage;