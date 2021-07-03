import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import hornedData from './data.json';
import FormList from './FormBeast';
import { Row } from 'react-bootstrap';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hornedData: hornedData,
        };
    }
    Filter = (event) => {
        let data = parseInt(event.target.data);
        let filteredArray = [];
        filteredArray = hornedData.filter(element => {
            if (element.horns === data) { return true ;}
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
                <FormList Filter={this.Filter} />
                {this.state.hornedData.map((beasts, index) => {
                    return (
                        <HornedBeasts handleShow={this.props.handleShow} hornedData={this.props.handleShow} title={beasts.title} description={beasts.description} image_url={beasts.image_url} key={index} />
                    );
                })}
                </Row>
            </>
        );
    }
}

export default Main;

