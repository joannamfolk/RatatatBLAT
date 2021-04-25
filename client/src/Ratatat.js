import React, { Component } from 'react';
import './styles/RatatatCSS.css';
import RatatatDeckImage from './appImages/cardback.jpg';
import RatatatCover from './appImages/0.jpg';



class Ratatat extends Component {
    constructor(props)
    {
        super(props);
        this.state = {AppMode: 'NoAction',  // NoAction, Game, PlayerWin, AIWin
        MoveState: 'NoState',
        CardsDeck: new Array(52),
        PlayerDeck: new Array(52),
        AIDeck: new Array(52),
        PlayerBank: new Array(52),
        AIBank: new Array(52),
        MoveCount: 0
    };
    this.TableCanvas = React.createRef()
    this.StartNewGame.bind(this);
    this.DoOneMove.bind(this);
    this.EndMove.bind(this);
    this.GetOneCardFromDeck.bind(this);
    this.componentDidUpdate.bind(this);
    this.render.bind(this);
    this.draw_card.bind(this);

    }
GetOneCardFromDeck = () =>{
    let rnd = Math.round(Math.random() * 52);
    if(this.state.CardsDeck[rnd] != 0){
      this.state.CardsDeck[rnd] = 0;
      return rnd;
    }
    // This card is absent! - We need get next one
    for(let count = rnd + 1; count < 52; count ++){
      if(this.state.CardsDeck[count] != 0){
        this.state.CardsDeck[count] = 0;
        return count;
      }
    }
    // let's look down
    for(let count = rnd - 1; count >= 0; count --){
      if(this.state.CardsDeck[count] != 0){
        this.state.CardsDeck[count] = 0;
        return count;
      }
    }
    // If we are here - no cards in deck!
    return - 1;
  }


MoveDeck = (deck) =>{
  for(let count = 0; count < 51; count ++){
    deck[count] = deck[count + 1];
  }
  deck[51] = null;
}

GetCardCount = (deck) =>{
    let count;
    for(count = 0; count < 52; count ++){
      if(deck[count] == null){break};
    }
    return count == 52 ? 0:  count ++;
  }

    StartNewGame = () =>{
      // Init new Game
      // Fill deck of cards and clearing AI & players decks
      for(let count = 0; count < 52; count ++){
          this.state.CardsDeck[count] = 1;
          this.state.PlayerDeck[count] = null;
          this.state.AIDeck[count] = null;
          this.state.PlayerBank[count] = null;
          this.state.AIBank[count] = null;
        
      }
      // now get random item and pass it to player or AI
      for(let count = 0; count < 26; count ++){
        this.state.PlayerDeck[count] = this.GetOneCardFromDeck();
        this.state.AIDeck[count] = this.GetOneCardFromDeck();
      }
      this.setState({MoveState: 'NoState'});
      this.setState({AppMode:   'Game'});
          
    }  

    DoOneMove = () =>{
        // There are 2 options:
        // 1. Banks is empty. Need to put one card
        // 2. Banks is NO empty. Need to put three cards + one
          let PlayerCard = -1;
          let AICard = -1;
          let BankCardCount;
          let PlayerCount = 0;
          let AICardCount = 0;
         
            switch(this.state.MoveState){
              case 'Equality':
                // 2-nd option  
                // Here we need to check - is there enough cards.
                PlayerCount = this.GetCardCount(this.state.PlayerDeck);
                AICardCount = this.GetCardCount(this.state.AIDeck);
                if(PlayerCount < 4){
                  this.state({AppMode: 'AIWin'});
                }
                if(AICardCount < 4){
                  this.state({AppMode: 'PlayerWin'});
                }
         
                // Put 3 cards + 1 to the bank
                BankCardCount = this.GetCardCount(this.state.PlayerBank);
                for(let count = 0; count < 4; count ++){
                    PlayerCard = this.state.PlayerDeck[0];
                    AICard     = this.state.AIDeck [0];
                    this.MoveDeck(this.state.PlayerDeck);
                    this.MoveDeck(this.state.AIDeck);
                    this.state.PlayerBank[BankCardCount] = PlayerCard;
                    this.state.AIBank[BankCardCount]     = AICard;
         
                    BankCardCount ++;
                }
         
                if((PlayerCard % 13) == (AICard % 13)){
                    this.setState({MoveState: 'Equality'});
                  }
                else
                {
                  this.setState({MoveState: 'EndMove'});
                }
          
                
                break;
              case 'EndMove':
                this.EndMove();
                this.setState({MoveState: 'NoState'});
                break;
              case 'NoState':
              default:
                // 1-st option
                PlayerCard = this.state.PlayerDeck[0];
                AICard     = this.state.AIDeck [0];
                this.MoveDeck(this.state.PlayerDeck);
                this.MoveDeck(this.state.AIDeck);
                
                BankCardCount = this.GetCardCount(this.state.PlayerBank);
                console.log(BankCardCount);
                this.state.PlayerBank[BankCardCount] = PlayerCard;
                this.state.AIBank[BankCardCount]     = AICard;
         
                if((PlayerCard % 13) == (AICard % 13)){
                  // 
                  this.setState({MoveState: 'Equality'});
                }else{
                  this.setState({MoveState: 'EndMove'});
                }
                break;
         
            }
          }
          
          EndMove = () =>{
            // End move
            let BankCardCount = this.GetCardCount(this.state.PlayerBank);
            let PlayerCard = this.state.PlayerBank[BankCardCount - 1] % 13;
            let AICard = this.state.AIBank[BankCardCount - 1] % 13;
            let count;
            let AICardCount;
            let PlayerCardCount;
            
            if(PlayerCard == AICard){
              // Do nothing. We can't here!!!
            }else
            {
              if(PlayerCard > AICard)
              {
                // Player win!
                // move cards to players deck
                console.log('Player win!');
                PlayerCardCount = this.GetCardCount(this.state.PlayerDeck);
                for(count = 0; count < BankCardCount; count ++)
                {
                  this.state.PlayerDeck[PlayerCardCount] = this.state.PlayerBank[count];
                  this.state.PlayerBank[count] = null;
                  PlayerCardCount ++
                }
                for(count = 0; count < BankCardCount; count ++)
                {
                  this.state.PlayerDeck[PlayerCardCount] = this.state.AIBank[count];
                  this.state.AIBank[count] = null;
                  PlayerCardCount ++
                }
                // Chek AI deck
                AICardCount = this.GetCardCount(this.state.AIDeck);
                if(AICardCount == 0){
                  this.setState({AppMode: 'PlayerWin'})
                }
              }
              else
              {
              // AI win!
                // move cards to AI deck
                console.log('AI win!');
                AICardCount = this.GetCardCount(this.state.AIDeck);
                for(count = 0; count < BankCardCount; count ++)
                {
                  this.state.AIDeck[AICardCount] = this.state.AIBank[count];
                  this.state.AIBank[count] = null;
                  AICardCount ++
                }
                for(count = 0; count < BankCardCount; count ++)
                {
                  this.state.AIDeck[AICardCount] = this.state.PlayerBank[count];
                  this.state.PlayerBank[count] = null;
                  AICardCount ++
                }
                // Chek Player deck
                AICardCount = this.GetCardCount(this.state.PlayerDeck);
                if(AICardCount == 0){
                  this.setState({AppMode: 'AIWin'})
                }
              }
            }
          }

          componentDidUpdate(){
            let TableCtx = this.refs.TableCanvas.getContext("2d");
          let count;
       
            TableCtx.fillStyle = "green";
            TableCtx.fillRect(0, 0, 500, 500);
       
            // Draw current scene
            // 1. Player and AI Deck
            let CardsInDeck = Math.floor(this.GetCardCount(this.state.AIDeck) / 13);
            TableCtx.drawImage(this.refs.CadrCover, CardsInDeck * 70, 0, 70, 96, 50, 30, 70, 96);
       
            CardsInDeck = Math.floor(this.GetCardCount(this.state.PlayerDeck) / 13);
            TableCtx.drawImage(this.refs.CadrCover, CardsInDeck * 70, 0, 70, 96, 300, 350, 70, 96);
       
       
            //2. banks
       
          let CardsInBank = this.GetCardCount(this.state.PlayerBank);
          console.log('Cards in player bank - ' + CardsInBank);
       
          //players bank
          let bc_x = 300;
          let bc_y = 200;
       
          for(count = 0; count < CardsInBank; count ++)
          {
              if(count % 4 == 0)
              {
                this.draw_card(this.state.PlayerBank[count], bc_x, bc_y);
                this.draw_card(this.state.AIBank[count], bc_x - 200, bc_y);
              }
              else
              {
                this.draw_card(-1, bc_x, bc_y);
                this.draw_card(-1, bc_x - 200, bc_y);
              }
              bc_x += 16;
              bc_y += 16;
          }
        }

        draw_card(CardNumber, DestinationX, DestinationY){
 
            let TableCtx = this.refs.TableCanvas.getContext("2d");
         
            if(CardNumber == -1)
            {
              TableCtx.drawImage(this.refs.CadrCover, 6, 0, 64, 96, DestinationX, DestinationY, 64, 96);
              
            }
            else{
              // size of 1 card in image at tis time: 64*96
              let SourceX = (CardNumber % 13) * 64;
              let SourceY = Math.floor(CardNumber / 13) * 96;
         
              TableCtx.drawImage(this.refs.CadrDeckImg, SourceX, SourceY, 64, 96, DestinationX, DestinationY, 64, 96);
            }
         
          }

BtnOnMoveClick = event => {
    this.DoOneMove();
    this.setState({ MoveCount: this.state.MoveCount + 1 });
  };

  render = () => {
    let BtnText = "Move";
    switch (this.state.MoveState) {
      case "EndMove":
        // Someone will win! Let's chek it
        let BankCardCount = this.GetCardCount(this.state.PlayerBank);
        let PlayerCard = this.state.PlayerBank[BankCardCount - 1] % 13;
        let AICard = this.state.AIBank[BankCardCount - 1] % 13;
        if (PlayerCard > AICard) {
          BtnText = "Player WIN!";
        } else {
          BtnText = "AI WIN!";
        }
        break;
      case "Equality":
        BtnText = "WAR! - next step";
        break;
      default:
        BtnText = "Move";
        break;
    }
 
    let AICardCount = this.GetCardCount(this.state.AIDeck);
    let PlayerCardCount = this.GetCardCount(this.state.PlayerDeck);
    //
    return (
      <div className="CardTable">
        <div className="CardTableHeader">
          <div className="HeaderText"> AI ({AICardCount}) </div>
 
          <button
            className="WarGameButton HeaderText"
            onClick={this.StartNewGame}
          >
            {" "}
            New game{" "}
          </button>
 
          <div className="HeaderText"> Player ({PlayerCardCount}) </div>
        </div>
        <div className="CardTableMainArea">
          <canvas
            ref="TableCanvas"
            className="TableCanvas"
            width={500}
            height={500}
          />
        </div>
        <div className="CardTableFooter">
          {this.state.AppMode == "Game" ? (
            <button
              className="WarGameButton"
              onClick={this.BtnOnMoveClick.bind(this)}
            >
              {" "}
              {BtnText}{" "}
            </button>
          ) : (
            this.state.AppMode
          )}
        </div>
 
        <img
          ref="CadrDeckImg"
          className="HiddenImage"
          src={CadrDeckImage}
          alt="deck"
        />
        <img
          ref="CadrCover"
          className="HiddenImage"
          src={CadrCover}
          alt="deck"
        />
      </div>
    );
  };
}
export default WarGame;