import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import hornedBeastList from './data.json';
import SelectedBeast from './SelectedBeast.js';
import { Row } from 'react-bootstrap';


class Main extends React.Component {
    render() {

        let likes = [];

        let likeIncreas = (likeNumber) => {
            return likeNumber +1;
        };
        return (
            <Row>
                {

                 hornedBeastList.map((beast,index) =>{
                    return (
                    <HornedBeasts 
                    key ={index} 
                    title={beast.title} 
                    image_url={beast.image_url} 
                    likes={likes}
                    likeNumber={0} 
                    raisLikes={likeIncreas} 
                    modalShow={this.propse.SelectedBeast} 
                    description={beast.description} />
                    );
                 })
                
                }

            </Row>


        );
    }
}

export default Main;
