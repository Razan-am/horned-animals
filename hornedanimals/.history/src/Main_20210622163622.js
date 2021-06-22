import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornedBeastList from './data.json';
import { Row } from 'react-bootstrap';


class Main extends React.Component {
    render() {

        let likes = [];

        let likeIncreas = (likeNumber) => {
            return likeNumber +1;
        };

        const Modal = ({show}) => {
            return show ? "modal display-block" : "modal display-none";};
        
        return (
            <Row>
                {

                 hornedBeastList.map((beast,index) =>{
                    return <HornedBeasts 
                    key ={index} title={beast.title} image_url={beast.image_url} likes={likes}
                    likeNumber={0} raisLikes={likeIncreas} updateState={show} description={beast.description} />;
   
                 })
                
                }

            </Row>


        );
    }
}

export default Main;
