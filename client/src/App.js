import React, { Component } from 'react';
import Deck from './components/Deck.js';
import Game from './components/Game.js';
import EventAndState from './EventAndState.js';
import './styles/App.css';


class App extends Component {
  render(){
    return(<div className='App-body'><EventAndState></EventAndState>
    <Game></Game></div>)
  }
}

export default App;