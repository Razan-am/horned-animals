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
      selectedAnimal:{}
  };
  }

  renderModal = (key) => {
    let selected = Horned.find(animal=>{
        if(animal.title === key){return animal;} 
    }
    );

    this.setState({
        show:true,
        selectedAnimal : selected
    });
  }
  
  handleClose = () => {
    this.setState({
        show:false,
        selectedAnimal:{}
    });
  }
  
  render(){
    return(
      <>
        <Header/>
        <Main renderModal={this.renderModal} selectedAnimal={this.state.selectedAnimal}/>
        <SelectedHorned show={this.state.show} selectedAnimal={this.state.selectedAnimal} handleClose={this.handleClose} />
        <Footer/>
      </>
     
    );
  }
}

export default App;

