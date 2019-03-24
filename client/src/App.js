import React, { Component } from 'react';
import './styles/App.css';
import './styles/HikeCard.css';
import Navbar from './containers/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    )
  }
}

export default App;
