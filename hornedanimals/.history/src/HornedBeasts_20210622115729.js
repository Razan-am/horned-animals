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

            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
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
