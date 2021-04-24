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
}