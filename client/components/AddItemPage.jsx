// AddItemPage.jsx

import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';


// not sure if need MOBX here,  will hold off

var AddItemPage = observer(class AddItemPage extends React.Component {

   constructor (props) {
    super (props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick (e) {
    e.preventDefault();

    var data = {
      keyword: this.refs.keyword.value,
      username: santaStore.currentUser
    };

    console.log(santaStore.currentUser);
    axios.get('/api/amazon', {
      params:{
        data: data
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  render() {
    return (
     <div>
      <div>
        <h2>This is the Add Item Page</h2>
        <h5>:</h5><input type="text" name="keyword" ref="keyword" size="50"/><br/>
        <button name="button" onClick={this.onButtonClick.bind(this)}>Search for Gifts</button>
      </div>
     </div>
      );
  }
})

export default AddItemPage;