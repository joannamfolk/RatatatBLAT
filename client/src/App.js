import React, { Component } from 'react';

import Game from './components/Game.js';

import './styles/App.css';


class App extends Component {
  render(){
    return(<div className='App-body'>
    <Game></Game></div>)
  }
}

export default App;