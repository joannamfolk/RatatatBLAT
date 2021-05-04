import React, { Component } from 'react'; 
class DeckCards extends Component {

    render() {
        return (
                <img style={{transform: this._transform}} className="RatatatCard" src='../AppImages/deck.png' alt='Deck of Cards'/>
        )
    }
}
export default DeckCards;