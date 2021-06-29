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

        const modal = ({show}) => {
            if (show === true){
                return this.showModal;
            }else{
                return hideModal;
            }
        };
        
        return (
            <Row>
                {

                 hornedBeastList.map((beast,index) =>{
                    return <HornedBeasts 
                    key ={index} title={beast.title} image_url={beast.image_url} likes={likes}
                    likeNumber={0} raisLikes={likeIncreas} updateState={modal} description={beast.description} />;
   
                 })
                
                }

            </Row>


        );
    }
}

export default Main;
