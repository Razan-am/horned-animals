import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedHorned from './SelectedBeast';
import hornedData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


class App extends React.Component{
  constructor(props){
    super(props);
     this.state = {
      hornedData: hornedData,
      show:false,
      selectedBeast:{}
  };
  }

  handleShow = (key) => {
    let selected = hornedData.find(animal=>{
        if(animal.title === key){return animal;} 
    }
    );

    this.setState({
        show:true,
        selectedBeast : selected
    });
  }
  
  handleClose = () => {
    this.setState({
        show:false,
        selectedBeast:{}
    });
  }
  
  render(){
    return(
      <>
      <Container>
        <Header/>
        <Main handleShow={this.handleShow} selectedBeast={this.state.selectedBeast}/>
        <SelectedHorned show={this.state.show} selectedBeast={this.state.selectedBeast} handleClose={this.handleClose} />
        <Footer/>
        </Container>
      </>
     
    );
  }
}

export default App;

