import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            numOfHornedLike: 0,
        };
    }
    increaseHorneLike = () => {
        this.setState({
            numOfHornedLike: this.state.numOfHornedLike + 1
        });
    }
    handleShow=() =>{
        this.props.hornedData({
           title: this.props.title,
            image_url:this.props.image_url,
            description:this.props.description
        });
    };
    render() {

        return (

            <div className="hornedbeasts">

                <Card  style={{ width: '18rem' , backgroundColor:'lightgrey' , boxShadow:'2px 2px 2px black'} }>

                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Img style={{  boxShadow:'2px 2px 2px #ccc'} } variant="top" src={this.props.image_url} alt={this.props.title} />
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="success" onClick={this.increaseHorneLike}>likes</Button>
                        <Card.Text>
                            Num Of Likes : {this.state.numOfHornedLike}
                        </Card.Text>
                        <Button variant="info" onClick={this.handleShow}>Show Details</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default HornedBeasts;

