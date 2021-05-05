import React, { Component } from 'react'; 
import './Deck.css'
class DeckCards extends Component {

    render() {
        return (
                <img style={{transform: this._transform}} className='deck' src='../AppImages/deck.png' alt='Deck of Cards'/>
        )
    }
}
export default DeckCards;