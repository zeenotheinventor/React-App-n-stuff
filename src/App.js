import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDescription from './UserDescription';

class App extends Component {
  
  render() {
    var isHappy= false;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <UserDescription height={30}/>
        </header>
      </div>
    );
  }
}

export default App;
