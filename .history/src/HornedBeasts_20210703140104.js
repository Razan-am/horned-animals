import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,Col} from 'react-bootstrap';


class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        };
    }
    likeIncrease = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }
    handleShow=() =>{
        this.props.hornedData(this.props.title);
    };
    render() {

        return (
            <>
            <Col>
                <Card  style={{ width: '18rem' }} bg={'dark'} text={'light'}>

                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Img  variant="top" src={this.props.image_url} alt={this.props.description} width="400" height="200"/>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="light" onClick={this.likeIncrease}>likes</Button>
                        <span text={'light'}>Number of likes {this.state.likes}</span>
                        <Button variant="danger" onClick={this.handleShow}>Details</Button>
                    </Card.Body>
                </Card>
                </Col>
            </>
        );
    }
}

export default HornedBeasts;

