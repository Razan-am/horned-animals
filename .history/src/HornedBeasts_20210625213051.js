import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import SelectedBeast from './SelectedBeast';


class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeNumber: props.likeNumber,
    };
  }

  increasing = () => {
    this.setState({ likeNumber: this.props.raisLikes(this.state.likeNumber) });
  }

  click = () => {
    this.props.modal({
      title: this.props.title,
      image_url: this.props.image_url,
      description: this.props.description,
    });
  }

  render() {
    return (
      <Col>
        <Card style={{ width: '18rem' }} bg={'dark'} text={'light'}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img alt={this.props.description} variant="top" src={this.props.image_url} width="400" height="200" />
          <Card.Body>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button variant="primary" onClick={this.increasing}>Likes</Button>
            <span text={'light'}>{this.state.likeNumber}</span>
            <Button variant="danger" onClick={this.click}>Details</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeasts;
