import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class PopoverComponent extends Component {
    render() {
        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3"><h3>Rules</h3></Popover.Title>
              <Popover.Content>
   
    
                {/* <!-- Game Explanation --> */}
                <div class="row">
                  <div class="column">
                    <h3>
                      How to Play
                    </h3>
                  </div>
                  <div class="column"></div>
                </div>

                  <div class="row">
                  <div class="column">
                    <p>
                      Each player is dealt four cards.  These are kept secret from one another.  Before the game starts, memorize the two cards on the outside of your hand.  Then flip all cards face down and start the game.  Players will take turns drawing cards from the deck or discard pile and swapping them with cards in the play areas.  All extra cards go to the discard pile, face up.<br/><br/>The goal is to have the lowest total of cards by the end of the game.  If a power card is pulled from the draw deck, you may use the powers as described below.  If you think you have the lowest total, shout "Rat-a-tat-cat!"  The other player will have one last turn, then you'll flip all the cards face-up.  Total the cards, and see who won!
                    </p>
                  </div>
                  <div class="column"></div>
                </div>

                <div class="row">
                  <div class="column">
                    <h3>
                      Game Setup + Interactions
                    </h3>
                  </div>
                  <div class="column"></div>
                </div>

                {/* <!-- Explanation of Player Spots --> */}
                <div class="row">

                  <div class="column">
                    <img src="playAreasRules.png" alt="Four player spots" />      
                  </div>

                </div>

                <div class="row">

                  <div class="column">  
                    <p>Each player gets for horizontal spots to play their cards on.</p>      
                  </div>

                </div>

                {/* <!-- Explanation of Deck Logic --> */}
                <div class="row">

                  <div class="column">
                    <img src="ruleDeck.png" alt="Deck Dealing a Card" />      
                  </div>

                </div>

                <div class="row">

                  <div class="column">  
                    <p>Click on the deck to deal a card.</p>      
                  </div>

                </div>

                {/* <!-- Explanation of Flip Card --> */}
                <div class="row">

                  <div class="column">
                    <img src="ruleFrontBack02.png" alt="Card Flipping" />      
                  </div>

                </div>


                <div class="row">


                  <div class="column">  
                    <p>Double clicking on cards flip them around.</p>      
                  </div>

                </div>

                {/* <!-- Explanation of Dragging Card --> */}
                <div class="row">
                  
                  <div class="column">

                    <img src="drag.png" alt="Card 1" />

                  </div>

                </div>

              <div class="row">

                  <div class="column">
                    <p>Click and hold cards to move them.</p>
                  </div>

              </div>


                {/* <!-- Number Cards --> */}
                <div class="row">
                  <div class="column">
                    <h3>
                      Number Cards
                    </h3>
                  </div>
                  <div class="column"></div>
                </div>

                <div class="row">
                  <div class="column">
                    <img src="numberCardsRules.png" alt="0, 5, and 9 card together" />
                  </div>

                  <div class="column">
                    <p>Number cards count 0 to 9, the less rats in your hands the better!</p>
                  </div>
                </div>

                {/* <!-- Power Cards -->

                <!-- Power Card Introduction --> */}
                <div class="row">
                  <div class="column">
                    <h3>
                      Power Cards
                    </h3>
                  </div>
                  <div class="column"></div>
                </div>

                {/* <!-- Rule Descriptions --> */}
                <div class="row">
                  <div class="column">
                    <img src="powerCardsRules.png" alt="The power cards Draw 2, Peek, and Swap" />
                  </div>
                  <div class="column"></div>
                </div>
                  
                  <div class="row">
                  <div class="column"></div>
                  <div class="column">
                    <p>These are the power cards.  They perform special actions when drawn.</p>
                    <ul>
                      {/* <!-- Draw 2 rules --> */}
                      <li><b>Draw 2:</b> Player will draw a card from the deck.  They can use it, or they can discard it and draw one other card from the deck.  If they do not want to use it, they will also discard the second one.</li>

                      {/* <!-- Peek Rules --> */}
                      <li><b>Peek:</b> Player can take a peek at any one of their own cards.  Then peek gets discarded. </li>
                      
                      {/* <!-- Swap Rules --> */}
                      <li><b>Swap: </b> Any player who draws this can blindly swap their card with a card from the other player's hand.  No peeking!</li>
                    </ul>
                  </div>
                </div>


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
