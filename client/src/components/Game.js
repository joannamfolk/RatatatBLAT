import React, {Component} from 'react';
import Deck from './DeckCards.js';
import Card from './RatatatCard.js';


class Game extends Component {
    constructor(){
        super();
        this.deck = [];
        const values = ['0','0','0','0','1','1','1','1','2','2','2','2','3','3','3','3','4','4','4','4','5','5','5','5','6','6','6','6','7','7','7','7','8','8','8','8','9','9','9','9','9','10','10','10','11','11','11','12','12','12']
       
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
        this.setState((card) => ({ value : this.dealTop()})
        )};


  render(){
      const newDeck = new Game();
        newDeck.shuffle();

    return(
        //create a deck
        <div>
            <button onClick={this.handleClick} style={{
        outline: "none", 
        border: "none",
        background: "transparent"
    }}>
        
        <Deck></Deck>
        </button>
        
        <Card image={`appImages/${this.state.value}.png`}></Card>
        </div>

    )
  }
}

  
export default Game;