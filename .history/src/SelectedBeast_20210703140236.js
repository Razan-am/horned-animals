import React from 'react';
import {Modal,Button,Card} from 'react-bootstrap';
class SelectedHorned extends React.Component {
    render() {
        return (
          <>        
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img variant="top" src={this.props.selectedBeast.image_url} alt={this.props.title} />
                    {this.props.selectedBeast.description}  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
          </>
        );
    }
}


export default SelectedHorned;
