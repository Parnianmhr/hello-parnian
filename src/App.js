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
        <Profile name="Parnian" bio="I love cats" age={38} pic="http://www.clipartbest.com/cliparts/bTy/og6/bTyog6zbc.png"/>
        <Profile name="Frits" bio="I am a cat" age={7} pic="https://s-media-cache-ak0.pinimg.com/236x/cb/d7/7a/cbd77a4db34ac2b8c2a25a395153162f.jpg"/>
      </div>
    );
  }
}

export default App;
