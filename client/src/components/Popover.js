import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class PopoverComponent extends Component {
    render() {
        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3"><h3>Rules</h3></Popover.Title>
              <Popover.Content>
              <strong>Objective:</strong> To have the lowest score at the end of the game 
              <br></br>To play:
              <hr/>
             <ul>
              <br></br><li>Each player is dealt four cards, face down. Players do not look at their cards. 
              <br></br>Rest of the deck, face down, in the middle. This is the DRAW pile. 
              <br></br>Dealer turns the top card face up and places it to the side of the DRAW pile. This is the DISCARD pile. 
              <br/>
              </li>
              
              <br></br><li>Players arrange their four cards face down in a line in front of them. 
              Each player gets to look at their two outside cards, and then turn them face down. This is the last time players can look at their cards, until they draw a PEEK card.
              Players take turns. For each turn players have two choices. They may take the top card from the DISCARD pile. This card is used to replace one of their line of cards. The card from the line is then placed face up on the top of the DISCARD pile, OR take the top card from the DRAW pile. Players may use it to replace one of the cards in their line, or place it, face up, on the DISCARD pile.</li>
              <br></br><li>There are three kinds of POWER cards: SWAP, DRAW 2, and PEEK. </li>
              <br></br><li>If players draw a PEEK card, they can peek at any ONE of their cards. Their turn is over and they put the PEEK card on the DISCARD pile. <br/>
              <br></br><li>If players draw a SWAP card, they may switch any one of their cards with any card from another player. They cannot look at the card being swapped or the other player’s card. After the switch, the turn is over and the SWAP card is placed on the DISCARD pile. </li>
              <br></br><li>If players draw a DRAW 2 card, they may take up to two more turns. First they pick the next card from the DRAW pile. If they decide to use this card, their turn is over and they do not take the second turn. If they do not use the first card, they discard it and draw another card. If they do not use it, they place it on the DISCARD pile and their turn is over.</li>
              <br></br><b>Winning:</b>When a player thinks he or she has the lowest score and can win, the player ends the game by shouting, “Rat-a Tat-BLAT”. After this, the other players each get ONE more turn. Then players turn their cards face up. If players have a POWER card, they must put it in the DISCARD pile and take the top card from the DRAW pile. </li>
              <br></br><b>SCORING:</b> Players add the numbers on their four cards. The player with the lowest score wins. 
              </ul>
              </Popover.Content>
            </Popover>
          );
          
          const Example = () => (
            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
              <Button variant="dark" style={{fontWeight: "bold"}}>Rules</Button>
            </OverlayTrigger>
          );
        return (
            <Example />
        )
    }
    
}
export default PopoverComponent;
