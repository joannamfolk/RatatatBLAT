import React, { Component } from 'react'; 
import '../styles/Deck.css'
class DeckCards extends Component {

    render() {
        return (
                <img style={{transform: this._transform}} className='deck' src='appImages/deck.png' alt='Deck of Cards'/>
        )
    }
}
export default DeckCards;