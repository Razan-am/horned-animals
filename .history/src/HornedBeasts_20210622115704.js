import React, { Component } from 'react';
import { Card,Button } from 'react-bootstrap';

class HornedBeasts extends Component {
    constructor (props){
        super(props);
        this.state={
            likeNumber:props.likeNumber,
        };
    }

    increasing = ()=>{
        this.setState({likeNumber:this.props.raisLikes(this.state.likeNumber)});
    }
    render() {
        return (

            
            // <div>
            //     <h2>{this.props.title}</h2>
            //     <img src={this.props.image_url} alt={this.props.title} width="400" height="300" />
            //     <p>{this.props.description}</p>
            //     <button onClick={this.increasing}>Likes</button>
            //     <span>{this.state.likeNumber}</span>
            // </div>
        );
    }
}

export default HornedBeasts;
