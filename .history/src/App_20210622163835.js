import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


class App extends React.Component {


  constructor() {
    super();
    this.state = {
      show: props.show,
    };
  }

  
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  dataFunction = () => {
    this.setState({ show: this.props.updateState(this.state.show) });
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
