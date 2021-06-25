import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends Component {
    render() {
        return (
            <>
                <Button variant="primary" onClick={this.dataFunction}>
                    Details
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <img alt={this.props.title} variant="top" src={this.props.image_url} width="200" height="100" /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default SelectedBeast;
