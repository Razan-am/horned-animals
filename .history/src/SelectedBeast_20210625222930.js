import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import HornedBeasts from "./HornedBeasts.js";
        
 class SelectedBeast extends Component {
      
    
    render() {
        
        return (
            <>
            <div>

                {/* <Button variant="primary" onClick={handleShow}> Alert Me </Button> */}
                <Modal show={this.props. showData} onHide={this.props.madalData}>
                    <Modal.Header closeButton>
                        <Modal.Title > <p>{this.props.modalData.title}</p> </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>{this.props.modalData.title}</p>
                    <img  alt={this.props.modalData.description} src={this.props.modalData.image_url} width='100px' height='100px'/>
                    <p>{this.props.modalData.description}</p>
                      
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handelExit}> Close </Button>
                      
                    </Modal.Footer>
                </Modal>
            </div>
            <HornedBeasts/>
            </>
        );
    }}



export default SelectedBeast