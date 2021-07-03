import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import hornedData from './data.json';
import { Row } from 'react-bootstrap';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hornedData: hornedData,
        };
    }
    Filter = (event) => {
        let value = parseInt(event.target.value);
        let filteredArray = [];
        filteredArray = hornedData.filter(element => {
            if (element.horns === value) { return true ;}
        }
        );
        this.setState({
            hornedData: filteredArray
        });
    }
    render() {
        return (
            <>
            <Row>
                {
                this.state.hornedData.map((beasts, index) => {
                    return (
                        <HornedBeasts handleShow={this.props.handleShow} hornedData={this.props.handleShow} title={beasts.title} description={beasts.description} image_url={beasts.image_url} keyValue={index} key={index} />
                    );
                })
                }
                </Row>
            </>
        );
    }
}

export default Main;

