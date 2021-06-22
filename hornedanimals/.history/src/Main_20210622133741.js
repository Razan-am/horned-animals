import React from 'react';
import HornedBeasts from './HornedBeasts';
import { Row } from 'react-bootstrap';
import {Row }from 'react-bootstrap';

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
                    return <HornedBeasts title={HornedBeastList[0].title} image_url={HornedBeastList[0].image_url} likes={likes}
                    likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[0].description} />
   
                })
                
            }

            </Row>
        );
    }
}

export default Main;
