import React from 'react';
import'../styles/App.css';
import RatatatCard from './RatatatCard';
import RatatatBackCard from './RatatatBackCard';
import ReactFlipCard from 'react-card-flip';

import './Deck.css';

import Draggable from 'react-draggable';

  
  const Card = (props) => {

    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
      //onclick lets return one, the onclick image is deck image

      <div style={{ margin: "auto", padding: "0%" }} className="Projects">
     
        <Draggable>    
        <div id="imgs">
        <ReactFlipCard isFlipped={isFlipped} flipDirection="horizontal">

        <div onDoubleClick={() => setIsFlipped((prev) => !prev)} className="card-body">
        <RatatatBackCard image={`appImages/cardback.png`}></RatatatBackCard>
        </div>
          
        <div onDoubleClick={() => setIsFlipped((prev) => !prev)}>
        <RatatatCard image={`appImages/${props.front}.png`}></RatatatCard>
        </div>
    
      
        </ReactFlipCard>
        </div>

        
        </Draggable>
      </div>
    );
  };
  
  export default Card;
  