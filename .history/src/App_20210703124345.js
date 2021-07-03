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

      show: false,
      selectedHorned:{},
    };
  }
  handleShow = (data) => {
    this.setState({ 
      show: true,
      selectedHorned:data,

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

        <Container>
          <Header/>
          <Main handleShow ={this.handleShow} selectedHorned ={this.state.selectedHorned} />
          <SelectedBeast handleExit={this.handleClose} showData={this.state.show} selectedHorned={this.state.selectedHorned} />
          <Footer/>
        </Container>
      </>
    );
  }
}

export default App;
