import React, { Component } from 'react'
import { Card, Button, Col } from 'react-bootstrap';
import SelectedBeast from "./SelectedBeast.js";


class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeNumber: props.likeNumber,
        }
    }

    favoriteBeast = () => {
        this.setState({ likeNumber: this.props.raisLikes(this.state.likeNumber) });

    }

    click = () => {
        this.props.modal({
            title: this.props.title,
            image_url: this.props.img,
            description: this.props.description,

        })
    }

    render() {
        console.log(this.props)
        console.log(this.state)
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


            // <div>
            //    <h1>{this.props.title}</h1>
            //    <p>{this.state.votes}</p>
            //    {/* <img onClick={this.favoriteBeast}/> */}
            //    <img src={this.props.img} alt={this.props.title} width="250" height="250"/>  
            //    <button onClick={this.favoriteBeast} >Votes ♥️ </button>
            //    <h2>{this.props.description}</h2>
            //    <span>{this.state.likeNumber}</span>

            // </div>
        )
    }
}

export default HornedBeasts