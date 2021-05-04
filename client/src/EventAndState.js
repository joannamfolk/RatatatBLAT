import React, {Component} from 'react';
import Card from './components/RatatatCard';

class EventAndState extends Component{
    constructor(){
        super();
        this.state = {
            cardData: ""
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    handleClick = ()=>{
        // console.log("Test")
        this.setState({
            cardData: ""
        })
    }

    handleChange = (event)=>{
        // console.dir(event.target.value)
        // this.state.cardData = event.target.value THIS IS BAD!!!
        this.setState({
            cardData: event.target.value
        })
        console.log(this.state.cardData);
    }

    handleSumbit = (event)=>{
        console.log("Form submitted!")
        this.setState({
            cardData: 'State is cool'
        });
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <Card img={this.state.cardData}> </Card>
                <form onSubmit={this.handleSumbit}>
                    <p onClick={this.handleClick} className="btn">Click Me!</p>
                    <input onChange={this.handleChange} type="text" placeholder="Enter some text!" />
                </form>
            </div>
        )   
    }
}

export default EventAndState;