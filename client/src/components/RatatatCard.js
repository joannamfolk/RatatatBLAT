import React, { Component } from 'react'; 
class RatatatCard extends Component {
    render() {
        return (
                <img className="RatatatCard" src={this.props.image} alt={this.props.name}/>
        )
    }
}
export default RatatatCard;