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
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {isHappy ? <h1>AHHHH THIS IS SOOOO EZYYYYY</h1> : <h2>WAHHHHHH SO SAAAAAD</h2>}

          <UserDescription height={30}/>
        </header>
      </div>
    );
  }
}

export default App;
