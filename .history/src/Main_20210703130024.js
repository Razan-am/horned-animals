import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import { Container, CardGroup, Card, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends Component {
    render() {
        return (
            <Container sm={12} md={9} lg={6} xl={3} fluid>
                <CardGroup className="m-5 d-block">
                    <Card className="m-5 border-0 shadow">
                        <Row >
                            {
                                this.props.dataa.map(item => {
                                    return (
                                        <HornedBeasts
                                            title={item.title}
                                            image_url={item.image_url}
                                            description={item.description}
                                            modal={this.props.modal}
                                        />
                                    )

                                })

                            }
                        </Row>
                    </Card>
                </CardGroup>
            </Container>



        )
    }
}

export default Main;

