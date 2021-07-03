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
                <Card  style={{ width: '18rem' , backgroundColor:'lightgrey' , boxShadow:'2px 2px 2px black'} }>

                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Img style={{  boxShadow:'2px 2px 2px #ccc'} } variant="top" src={this.props.image_url} alt={this.props.title} />
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="success" onClick={this.likeIncrease}>likes</Button>
                        <Card.Text>
                            Num Of Likes : {this.state.likes}
                        </Card.Text>
                        <Button variant="info" onClick={this.handleShow}>Show Details</Button>
                    </Card.Body>
                </Card>
                </Col>
            </>
        );
    }
}

export default HornedBeasts;

