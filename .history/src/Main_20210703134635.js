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
    filteredBeast = (event) => {
        let value = parseInt(event.target.value);
        let filter = [];
        filter = hornedData.filter(element => {
            if (element.horns === value) {
                 return true ;
                }
        }
        );
        this.setState({
            hornedData: filter
        });
    }
    render() {
        return (
            <>
            <Row>
                <FormList filteredBeast={this.filteredBeast} />
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

