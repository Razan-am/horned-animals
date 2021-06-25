import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import HornedBeasts from './HornedBeasts';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      honesData:HornedBeasts,
      show: false,
      modalData:{},
    };
  }
  handleShow = (data) => {
    this.setState({ 
      show: true,
      modalData:data,

    });
  }
  handleClose = (data) =>{
    this.setState({
      show:false,
    });
  }
  
  render() {
    return (
      <>
        <Header />
        <Container>
          <Main selectedBeast ={this.handleShow} data ={this.state.honesData}/>
          <SelectedBeast handleExit={this.handleClose} showData={this.state.show} modalData={this.state.modalData} />
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
