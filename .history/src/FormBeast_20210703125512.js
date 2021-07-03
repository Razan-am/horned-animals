import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import hornedData from "./data.json";
import Main from "./Main.js";



class FormHonerd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horns: 0,

        };
    }
    userhornsHandler = (e) => {
        let hornsList = hornedData.filter(beast => {
            return (beast.horns === e.target.value);
        });
        this.setState({
            hornsList,
            horns: e.target.value,
            show: true,
        });
        this.props.handelSelect();

    }

    render() {

        return (
            <div>
                <Form >
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label> Custom Select </Form.Label>
                        <Form.Control as="select" onChange={(e) => this.userhornsHandler(e)}>
                            <option value='' >all</option>
                            <option value='1' >1</option>
                            <option value='2'>2</option>
                            <option value='3' >3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                {
                    this.props.hideList &&
                    <Main horns={this.state.horns} />

                }
            </div>
        );
    }
}

export default FormHonerd;

