import React, {Component} from 'react';
import PopoverComponent from './Popover.js';
import Deck from './DeckCards.js';
import Card from './Card.js';
import './Deck.css';
import {Button} from 'react-bootstrap';

class Game extends Component {
    constructor(){
        super();
        this.state = {
            cards: [],
            value: ''
          };
        this.deck = [];
        this.values = this.populateDeck();
    }

    createCard = () => {
        if (this.state.value) {
            const newCard = (
                <Card
                front={this.state.value}
                default={{ x: 0, y: 0, width: 320, height: 200 }}
                ></Card>
            )
            var cards = this.state.cards.slice();
            console.log("card" + cards);
            cards.push(newCard);
            this.setState({ cards: cards });
        }
        console.log("number of cards turned over", this.state.cards.length);
    }

    dealTop() {
        if (this.deck.length === 0) {
            console.log("the deck of remaining cards is empty!");
            console.log("cards array", this.state.cards);
            this.populateDeck();
        } else {
            console.log("deck array", this.deck);
            return this.deck.pop()
        }
    }
    
    handleClick = () => {
        this.setState(() => ({ value : this.dealTop()}),
        console.log(this.state.value),
        this.createCard()
        )};

    populateDeck() {
        this.values = ['0','0','0','0', // x4 each number card
                        '1','1','1','1',
                        '2','2','2','2',
                        '3','3','3','3',
                        '4','4','4','4',
                        '5','5','5','5',
                        '6','6','6','6',
                        '7','7','7','7',
                        '8','8','8','8',
                        '9','9','9','9','9','9','9','9','9', // x9 rat kings
                        '10','10','10', // x3 each power card type
                        '11','11','11',
                        '12','12','12']
                        
        this.values = this.values.sort(() => Math.random() - .5)
        for (let value in this.values){
            this.deck.push(`${this.values[value]}`);
             this.deck.push(`${this.values[value]}`);
        }
        this.setState({cards: []})
    }

  render(){
        
    return(
        //create a deck
        <div>
            <PopoverComponent/>
            <Button variant="secondary">New Game</Button>
        <button 
            onClick={this.handleClick} 
            style={{
                outline: "none", 
                border: "none",
                background: "transparent"
        }}>
        <Deck></Deck>
        </button>
        <div>{this.state.cards}</div>
        </div>
    )
  }
}
  
export default Game;