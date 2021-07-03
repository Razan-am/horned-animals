import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';


class SelectedBeast extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showData} hide={this.props.handleExit}></Modal>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selectedHorned.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img alt={this.props.description} variant="top" src={this.props.selectedHorned.image_url} width="200" height="100" />
                        <p>{this.props.selectedHorned.description}</p>
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