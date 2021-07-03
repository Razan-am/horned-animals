import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedHorned from './SelectedBeast';
import Horned from './data.json';


class App extends React.Component{
  constructor(props){
    super(props);
     this.state = {
      AllHorned: Horned,
      showModal:false,
      selectedAnimal:{}
  };
  }

  renderModal = (key) => {
    let selected = Horned.find(animal=>{
        if(animal.title === key){return animal;} 
    }
    );

    this.setState({
        showModal:true,
        selectedAnimal : selected
    });
  }
  
  handleClose = () => {
    this.setState({
        showModal:false,
        selectedAnimal:{}
    });
  }
  
  render(){
    return(
      <>
        <Header/>
        <Main renderModal={this.renderModal} selectedAnimal={this.state.selectedAnimal}/>
        <SelectedHorned showModal={this.state.showModal} selectedAnimal={this.state.selectedAnimal} handleClose={this.handleClose} />
        <Footer/>
      </>
     
    );
  }
}

export default App;

