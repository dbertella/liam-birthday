import React, { Component } from 'react';
import logo from './liam.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Liam's Birthday will be this sunday from 14:30
        </header>
      </div>
    );
  }
}

export default App;
