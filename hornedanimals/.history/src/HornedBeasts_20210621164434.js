import React, { Component } from 'react';

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
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title} width="130" height="130"/>
                <p>{this.props.description}</p>
                <h4>{this.state.likeNumber}</h4>
                <button onClick={this.increasing}>Likes</button>
            </div>
        );
    }
}

export default HornedBeasts;
