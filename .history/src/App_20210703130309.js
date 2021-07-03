import React, { Component } from 'react';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import FormBeast from './FormBeast';
import hornedData from './data.json';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
     show:false,
     arrmodal:{},
     fliterdata:hornedData,
     fliterhornd:hornedData
    };
  }

  modal=(item)=>{
   this.setState({
     arrmodal:item,
     show:true
   });
  }

  onClose=()=>{
    this.setState({
      show:false
    });
  }
  fliterdData =(data)=>{
  this.setState({fliterhornd:data});
  }

  render() {
    return (
      <div>
        <FormBeast filterdData={this.fliterdData} fliterdata={this.state.fliterdata} />
        <Main modal={this.modal} dataa={this.state.fliterhornd} />
        <SelectedBeast arrmodal={this.state.arrmodal} showdata={this.state.show} onClose={this.onClose}  />

      </div>
    );
  }
}

export default App;

