import React, { Component } from 'react';
import Deck from './components/Deck.js';
// import Game from './components/Game.js';
import EventAndState from './EventAndState.js';


class App extends Component {
  render(){
    return(<div><EventAndState></EventAndState>
    <Deck></Deck></div>)
  }
}

  
export default App;