import React, { Component } from 'react'

class HornedBeasts extends Component {
    render() {
        return (
            <div>
                <img>{this.props.image_url}</img>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default HornedBeasts
