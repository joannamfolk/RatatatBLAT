import React from 'react';
import'../styles/App.css';
import RatatatCard from './RatatatCard';
import RatatatBackCard from './RatatatBackCard';
import ReactFlipCard from 'react-card-flip';
import Data from '../numbercarddata.js';

import Draggable from 'react-draggable';

const CardStyle = {
    width: "150px",
    height: "180px"
  };

  const Card = ({ project }) => {

    const [isFlipped, setIsFlipped] = React.useState(false);
    // This is to define what the Card object is (dynamically) 
    return (
      <Draggable>
      <div style={CardStyle} id="imgs">
      <ReactFlipCard isFlipped={isFlipped} flipDirection="horizontal">
      <div onDoubleClick={() => setIsFlipped((prev) => !prev)}
        className="card-body"
      >
      <RatatatCard image={`appImages/${project.front}`}></RatatatCard>
      </div>
  
      <div onDoubleClick={() => setIsFlipped((prev) => !prev)} className="card-body">
      <RatatatBackCard image={`appImages/${project.back}`}></RatatatBackCard>
      </div>
      </ReactFlipCard>
      </div>
      </Draggable>
    );
  };
  
  const Deck = () => {
    return (
      
      <div style={{ margin: "auto", padding: "20%" }} className="Projects">
        <h1>RatatatBlat!</h1>
        {Data.map((item, index) => (
          <Card image={`appImages/${item.front}`} project={item} key={`card-${index}`} />
        ))}
      </div>
    );
  };
  
  export default Deck;
  
  