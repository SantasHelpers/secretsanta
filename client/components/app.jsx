// app.js
// will hold state - the search results and if the list should be displayed
//import { Grid } from 'react-bootstrap';
let { Grid, Row, Col, Thumbnail, Button, Table } = ReactBootstrap;//"react's require statement. looks to find a match in ReactBootstrap"

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
    <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
  </div>
  );
  }
}