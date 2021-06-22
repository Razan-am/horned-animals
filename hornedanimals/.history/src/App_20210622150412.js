import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import hornedBeastList from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likeNumber: props.likeNumber,
    };
  }

  increasing = () => {
    this.setState({ likeNumber: this.props.raisLikes(this.state.likeNumber) });
  }
  
  render() {
    return (
      <>
        <Header />
        <Container>
          <Main />
        </Container>
        <Footer />

      </>
    );
  }
}

export default App;
