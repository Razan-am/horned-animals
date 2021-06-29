import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import { Row } from 'react-bootstrap';




class Main extends React.Component {
    render() {

        let likes = [];

        let likeIncreas = (likeNumber) => {
            return likeNumber +1;
        };
        return (
            <>
            <Row>
                {

                 this.props.data.map((beast,index) =>{
                    return (
                    <HornedBeasts 
                    key ={index} 
                    title={beast.title} 
                    image_url={beast.image_url} 
                    description={beast.description}
                    likes={likes}
                    likeNumber={0} 
                    raisLikes={likeIncreas} 
                    modal={this.props.selectedBeast} 
                     />
                    );
                 })          
                }
            </Row>
            </>
        );
    }
}

export default Main;
