import React, { Component } from 'react';

class HornedBeasts extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title} width="193" height="130" display = 'inline-block'/>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default HornedBeasts;
