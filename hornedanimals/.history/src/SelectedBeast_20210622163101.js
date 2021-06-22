import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends Component {
    render() {
        return (
            <>
                            <Button variant="primary" onClick={showModal}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={hideModal}></Modal>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img alt={this.props.title} variant="top" src={this.props.image_url} width="200" height="100" />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>



            </>
        );
    }
}

export default SelectedBeast;
