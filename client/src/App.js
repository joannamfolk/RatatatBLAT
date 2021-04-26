import React, { Component } from 'react';
import './App.css';
import Ratatat from './Ratatat.js';
import RatatatCard from './components/RatatatCard';
import RatatatBackCard from './components/RatatatBackCard';
import CardImage from './appImages/1.jpg';
import CardImage2 from './appImages/2.jpg';
import ReactFlipCard from 'react-card-flip';
import Draggable from 'react-draggable';

 
// eslint-disable-next-line no-unused-vars
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped}))
  }
  render() {
    return (
    <div className="App">
    <div className="App-body">
      
      <ReactFlipCard isFlipped={this.state.isFlipped} flipDirection="horizontal">
      <div onClick={this.handleClick}className="card-body">
      <RatatatCard image={CardImage} name="card"></RatatatCard>
      </div>
     
    

      <div onClick={this.handleClick} className="card-body">
      <RatatatBackCard image={CardImage2} name="card"></RatatatBackCard>
      </div>
      </ReactFlipCard>
   
    </div>
  </div>
  );
};
}
export default App;