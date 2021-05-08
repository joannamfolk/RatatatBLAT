import React, {Component} from 'react';
import Deck from './DeckCards.js';
import Card from './Card.js';


class Game extends Component {
    constructor(){
        super();
        this.state = {
            cards: [],
            value: ''
          };
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

    createCard = (value) => {
        const newCard = (
            <Card
            front={this.state.value}
            default={{ x: 0, y: 0, width: 320, height: 200 }}
            ></Card>
        )
        var cards = this.state.cards.slice();
        cards.push(newCard);
        this.setState({ cards: cards });
    }

    dealTop() {
        return this.deck.pop();
    }
    


    handleClick = () => {
        this.setState(() => ({ value : this.dealTop()}),
        this.createCard()
        )};


  render(){
      const deck = new Game();
        deck.shuffle();
        


    return(
        //create a deck
        <div>
        <button onClick={this.handleClick} 
        style={{
            outline: "none", 
            border: "none",
            background: "transparent"
        }}>
        
        <Deck></Deck>
        </button>
        
        <Card front={this.state.value} back={'backcard.png'}></Card>
        <div>here{this.state.cards}</div>
        </div>

    )
  }
}

  
export default Game;