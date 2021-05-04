import React, {Component} from 'react';
import Deck from './DeckCards.js';
import Card from './RatatatCard.js';


class Game extends Component {
    constructor(){
        super();
        this.deck = [];
        const values = ['0','1','2','3','4','5','6','7','8','9','10','11','12']
       
        for (let value in values){
            this.deck.push(`${values[value]}`);
        }
    
    }
    shuffle() {
        const { deck } = this;
        let m = deck.length, i;
    
        while(m){
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
    
        return this
    }

    dealTop() {
        return this.deck.pop();
    }
    state = {
        value: ''
    }


    handleClick = () => {
        this.setState({
            value: this.dealTop()
        })
    }


  render(){
      const newDeck = new Game();
        newDeck.shuffle();

    return(
        //create a deck
        <div>
        <Deck onclick={this.handleClick}></Deck>
        <Card image={`appImages/${this.state.card}.png`}></Card>
        </div>
    
    )
  }
}

  
export default Game;