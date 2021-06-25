import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import HornedBeasts from './HornedBeasts';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      honesData:HornedBeasts,
      show: false,
      modalData:{},
    };
  }
  dataShow = (data) => {
    this.setState({ 
      show: true,
      modalData:data,

    });
  }
  dataClose = (data) =>{
    this.setState({
      show:false,
    });
  }
  
  render() {
    return (
      <>
        <Header />
        <Container>
          <Main SelectedBeast ={this.dataShow} data ={this.state.honesData}/>
          <SelectedBeast dataClose={this.dataClose} showData={this.state.show} modalData={this.state.modalData} />
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
