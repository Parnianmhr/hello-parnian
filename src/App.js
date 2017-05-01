import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile'
import Color from './components/Color'

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
        <h1>Profiles</h1>
        <Profile name="Parnian" bio="I love cats" age={38} pic="http://www.clipartbest.com/cliparts/bTy/og6/bTyog6zbc.png"/>
        <Profile name="Frits" bio="I am a cat" age={7} pic="https://s-media-cache-ak0.pinimg.com/236x/cb/d7/7a/cbd77a4db34ac2b8c2a25a395153162f.jpg"/>
        <Profile name="Zoe" bio="I am a electric car" age={4} pic="http://myrenaultzoe.com/wp-content/uploads/2012/11/6860195188-ba8f742d82_Renault_Zoe_Flickr.jpg"/>
        <div>
          <Color name="colors" />
        </div>
      </div>
    );
  }
}

export default App;
