import React from 'react';
import { Form } from 'react-bootstrap/'


class FormList extends React.Component {
   

    render() {
        return (
            <div className ="form">

                <Form >

                    <Form.Label>Filter Based On Number Of Hornes</Form.Label>

                    <Form.Control as='select' onChange = { this.props.Filter }>
                        <option value="0"> All </option>
                        <option value="1"> One </option>
                        <option value="2"> Two </option>
                        <option value="3"> Three </option>
                        <option value="100"> WOW... </option>

                    </Form.Control>
                </Form>
            </div>
        )
    }
}

export default FormList;