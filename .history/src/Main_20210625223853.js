import React, { Component } from 'react';
import HornedBeasts from "./HornedBeasts.js";
import hornedData from "./data.json";
import { Row } from 'react-bootstrap';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideList: false,
        };
    }
    handelSelect = () => {
        this.state = ({
            hideList: true
        });
    }


    render() {
        let likeIncreas = (likeNumber) => {
            return likeNumber + 1;
        };
        return (
            <Row>
                {
                    hornedData.map((beast) => {
                        return (Number(this.state.horns) === beast.horns &&
                            <HornedBeasts title={beast.title} img={beast.image_url} description={beast.description}
                                likeNumber={0} raisLikes={likeIncreas} modal={this.props.selectedBeast} />) || (Number(this.state.horns) === 0 &&
                                    <HornedBeasts title={beast.title} img={beast.image_url} description={beast.description}
                                        likeNumber={0} raisLikes={likeIncreas} modal={this.props.selectedBeast} />);
                    })
                };
            </Row>
        );
    }
}

export default Main;
