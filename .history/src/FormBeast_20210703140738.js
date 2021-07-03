import React from 'react';
import { Form } from 'react-bootstrap/';


class FormBeast extends React.Component {
    render() {
        return (
            <>
                <Form style={marginButton=100px}>
                    <Form.Label>Number of Beasts Hornes</Form.Label>
                    <Form.Control as='select' onChange = { this.props.filteredBeast }>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="100"> 100</option>
                    </Form.Control>
                </Form>
            </>
        );
    }
}

export default FormBeast;

