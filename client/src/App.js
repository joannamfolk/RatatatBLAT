import React, { Component } from 'react';
import './App.css';
import Ratatat from './Ratatat.js';
import RatatatCard from './components/RatatatCard';
import RatatatBackCard from './components/RatatatBackCard';
import ReactCardFlip from "react-card-flip";
import ReactFlipCard from 'react-card-flip';
import Data from './numbercarddata.js';
import Draggable from 'react-draggable';


const CardStyle = {
  border: "1px solid black",
  width: "150px",
  height: "180px"
};

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  // console.log(project);
  return (
    <div style={CardStyle} id="imgs">
    <ReactFlipCard isFlipped={isFlipped} flipDirection="horizontal">
    <div onClick={() => setIsFlipped((prev) => !prev)}
      className="card-body"
    >
    <RatatatCard image={`appImages/${project.front}`}></RatatatCard>
    </div>

    <div onClick={() => setIsFlipped((prev) => !prev)} className="card-body">
    <RatatatBackCard image={`appImages/${project.back}`}></RatatatBackCard>
    </div>
    </ReactFlipCard>
    </div>
  );
};

const Projects = () => {
  return (
    
    <div style={{ margin: "auto", padding: "20%" }} className="Projects">
      <h1>RatatatBlat!</h1>
      {Data.map((item, index) => (
        <Card image={`appImages/${item.front}`} project={item} key={`card-${index}`} />
      ))}
    </div>
  );
};

export default Projects;
