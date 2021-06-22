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

            <Card style={{ width: '18rem' }} bg={'dark'} text={'white'}>
              <Card.Title>{this.props.title}</Card.Title>
            <Card.Img  alt={this.props.title} variant="top" src={this.props.image_url} />
            <Card.Body>
              <Card.Text>
              {this.props.description}
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
