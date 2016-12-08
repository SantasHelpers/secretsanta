// app.js
// will hold state - the search results and if the list should be displayed
import { Grid, Row, Col, Thumbnail, Button  }  from 'react-bootstrap';
import React from 'react';

class App extends React.Component {

  constructor (props) {
    super (props);

    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    
  }

  // this will make a post request to the API to save a meal when the user clicks on the photo
  saveToDatabase () {
    
  }
  
  render () {

    return (
      <div>
        <h2>Find-A-Meal</h2>
        <Grid>
          <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="http://activeazur.wpengine.netdna-cdn.com/wp-content/uploads/2013/09/mandelieu-kitesurfing.jpg" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="http://activeazur.wpengine.netdna-cdn.com/wp-content/uploads/2013/09/mandelieu-kitesurfing.jpg" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="http://activeazur.wpengine.netdna-cdn.com/wp-content/uploads/2013/09/mandelieu-kitesurfing.jpg" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
