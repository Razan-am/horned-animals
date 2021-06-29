import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends Component {
    render() {
        const modal = (show) => {
            if (show === true){
                return this.showModal;
            }else{
                return this.hideModal;
            }
        };
        return (
            <>

                <Modal show={this.props.showData} onHide={this.props.modalData}></Modal>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img alt={this.props.title} variant="top" src={this.props.image_url} width="200" height="100" />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.show}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>



            </>
        );
    }
}

export default SelectedBeast;
