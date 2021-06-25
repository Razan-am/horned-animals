import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import hornedBeastList from './data.json';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      honesData:hornedBeastList,
      show: false,
      modalData:{},
    };
  }
  dataFunction = (data) => {
    this.setState({ 
      show: true,
      modalData:data,

    });
  }
  
  render() {
    return (
      <>
        <Header />
        <Container>
          <Main />
          <SelectedBeast />
        </Container>
        <Footer />

      </>
    );
  }
}

export default App;
