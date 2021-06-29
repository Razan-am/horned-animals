import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import hornedBeastList from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


class App extends React.Component {
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
