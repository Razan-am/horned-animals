import React, { Component } from 'react';

class HornedBeasts extends Component {
    constructor (props){
        super(props);
        this.state={
            
        };
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title} width="130" height="130"/>
                <p>{this.props.description}</p>
                <button onClick={this.props.like}>Likes</button>
                <span>{this.props.}</span>
            </div>
        );
    }
}

export default HornedBeasts;
