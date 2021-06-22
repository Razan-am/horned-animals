import React, { Component } from 'react';
<<<<<<< HEAD
import { Card,Button,Col } from 'react-bootstrap';

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
            <Col>
            <Card style={{ width: '18rem' }} bg={'dark'} text={'light'}>
              <Card.Title>{this.props.title}</Card.Title>
            <Card.Img  alt={this.props.title} variant="top" src={this.props.image_url} width="400" height="200" />
            <Card.Body>
              <Card.Text>
              {this.props.description}
              </Card.Text>
              <Button variant="primary" onClick={this.increasing}>Likes</Button>
              <span text={'light'}>{this.state.likeNumber}</span>
            </Card.Body>
          </Card>
          </Col>
=======

class HornedBeasts extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title}/>
                <p>{this.props.description}</p>
            </div>
>>>>>>> dd22af2dd7503643fffc982ebcac824058145b80
        );
    }
}

export default HornedBeasts;
