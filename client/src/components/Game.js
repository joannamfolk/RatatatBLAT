import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Deck from './DeckCards.js';
import Card from './RatatatCard.js';


class Game extends Component {
    constructor(){
        super();
        this.deck = [];
        const values = ['0','0','0','0', // x4 each cat
                        '1','1','1','1',
                        '2','2','2','2',
                        '3','3','3','3',
                        '4','4','4','4',
                        '5','5','5','5',
                        '6','6','6','6',
                        '7','7','7','7',
                        '8','8','8','8',
                        '9','9','9','9','9','9','9','9','9', // x9 rats!
                        '10','10','10', // x3 each power card type
                        '11','11','11',
                        '12','12','12']
       
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
        //console.log(this.deck.pop());
        return this.deck.pop();
    }
    state = {
        value: ''
    }


    handleClick = () => {
        this.setState({
            value: this.dealTop()
        })
        return this.deck.pop();
    }


  render(){
      const newGame = new Game();
        newGame.shuffle();
        newGame.dealTop();
        //console.log(newGame.deck);

    return(
        //create a deck
        <div>
        <Deck onclick={this.handleClick}></Deck>
        <Button onclick={this.handleClick}></Button>
        <Card image={`appImages/${this.state.card}.png`}></Card>
        </div>
    
    )
  }
}

  
export default Game;