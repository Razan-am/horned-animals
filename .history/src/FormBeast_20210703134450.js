import React from 'react';
import { Form } from 'react-bootstrap/';


class FormList extends React.Component {
   

    render() {
        return (
            <div className ="form">

                <Form >

                    <Form.Label>Filter Based On Number Of Hornes</Form.Label>

                    <Form.Control as='select' onChange = { this.props.Filter }>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="100"> 100</option>

                    </Form.Control>
                </Form>
            </div>
        );
    }
}

export default FormList;

