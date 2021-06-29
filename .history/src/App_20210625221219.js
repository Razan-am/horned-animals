import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import HornedList from './data.json';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      honesData:HornedList,
      show: false,
      modalData:{},
      haideList:false,
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
  handlerSelect=()=>{
    this.state({
      hideList:true
    })
  }
  
  render() {
    return (
      <>
        <Header />
        <Container>
          <Main handleShow ={this.handleShow} data ={this.state.honesData} hideList={this.state.haideList}/>
          <SelectedBeast handleExit={this.handleClose} showData={this.state.show} modalData={this.state.modalData}handlerSelect={this.handlerSelect} />
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
