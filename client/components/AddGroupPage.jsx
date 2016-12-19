//AddGroupPage.jsx

import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import santaStore from './SantaStore';
import DropZone from 'react-dropzone';

// not sure if need MOBX here,  will hold off

var AddGroupPage = observer(class AddGroupPage extends React.Component {

  constructor (props) {
    super (props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onButtonClick (e) {
    e.preventDefault();

    var data = {
      username: santaStore.currentUser,
      group: {
        name: this.refs.group.value,
        summary: this.refs.summary.value,
        imageURL: '',
        users:[],
        targets:[]
      }
    };

    axios.post('/api/groups', {
      data: data
    })
    .then(function (response) {
      console.log(response);
      santaStore.groupData.push(data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onDrop (acceptedFiles) {

    if ( acceptedFiles[0].type === 'image/jpeg' ) {

      // var canvas = document.createElement("canvas");
      // canvas.width = img.width;
      // canvas.height = img.height;
    
      // var ctx = canvas.getContext("2d");
      // ctx.drawImage(img, 0, 0);
    
      // var dataURL = canvas.toDataURL("image/png");
    
      // console.log(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));


       console.log('in onDrop', acceptedFiles);
       localStorage.setItem('name', 'hello');
       localStorage.imgfile = acceptedFiles;

       santaStore.uploadImg = acceptedFiles[0].preview;

    } else{
      console.log('sorry that is not an acceptable type');
    }
  }

  render() {
    return (
      <div>
        <h2>This is the Add Group Page</h2>
        <h5>Group:</h5><input type="text" name="group" ref="group" size="50"/><br/>
        <h5>Tell us about your Group</h5> <br/>
        <textarea type="text" name="summary" ref="summary" rows="10" cols="40"/> <br/>
        <DropZone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
          </DropZone>
          <img className="img-preview" src={santaStore.uploadImg} />
        <button name="button" onClick={this.onButtonClick.bind(this)}>Add Group</button>
      </div>
    );
  }
});

export default AddGroupPage;