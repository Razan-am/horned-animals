import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Countainer>
        <Main />
        </Countainer>
        <Footer />

      </div>
    );
  }
}

export default App;
