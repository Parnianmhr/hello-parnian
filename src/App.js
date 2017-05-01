import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my first React project</h2>
        </div>
        <p className="App-intro">
          More will come soon.
        </p>
        <h1>Parnian is here!</h1>
        <Profile name={"parnian"} bio={"I love cats"} age={38}/>
        <Profile name={"Frits"} bio={"I am a cat"} age={7}/>
      </div>
    );
  }
}

export default App;
