import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import HornedBeasts from './HornedBeasts';

class SelectedBeast extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showData} onHide={this.props.modalData}></Modal>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.modalData.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img alt={this.props.modalData.description} variant="top" src={this.props.modalData.image_url} width="200" height="100" />
                        <p>{this.props.modalData.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleExit}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </>
        );
    }
}

export default SelectedBeast;
