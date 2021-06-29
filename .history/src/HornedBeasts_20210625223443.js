import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';



class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeNumber: props.likeNumber,
        };
    }

    favoriteBeast = () => {
        this.setState({ likeNumber: this.props.raisLikes(this.state.likeNumber) });

    }

    click = () => {
        this.props.modal({
            title: this.props.title,
            image_url: this.props.img,
            description: this.props.description,

        });
    }

    render() {
        return (
            <Col>
                <Card style={{ width: '18rem' }} bg={'dark'} text={'white'}>
                    <Card.Img alt={this.props.description} variant="top" src={this.props.img} width="250" height="250" />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button onClick={this.favoriteBeast} variant="primary">Votes ♥️</Button>
                        <span> {this.state.likeNumber} </span> <br></br>
                        {/* <Button onClick={this.showModal} variant="primary">Alert Me</Button> */}
                        <Button onClick={this.click} variant="primary">Alert Me</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default HornedBeasts;
