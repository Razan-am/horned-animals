import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import HornedList from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      honesData:HornedList,
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
  handleClose = () =>{
    this.setState({
      show:false,
    });
  }
  
  render() {
    return (
      <>
        <Header />
        <Container>
          <Main handleShow ={this.handleShow} data ={this.state.honesData}/>
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
