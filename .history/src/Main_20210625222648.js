import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import HornedList from './data.json';
import { Row } from 'react-bootstrap';




class Main extends React.Component {
    constructor(){
        super();
        this.state={
            haideList:false,
        };
    }
    handlerSelect=()=>{
        this.state({
          hideList:true
        });
      }
    render() {
        let likes = [];
        let likeIncreas = (likeNumber) => {
            return likeNumber +1;
        };
        return (
            <>
            <Row>
                {

HornedList.map((beast,index) =>{
                    return ((this.state.beastHorns) === beast.horns &&
                    <HornedBeasts key ={index} title={beast.title} image_url={beast.image_url} description={beast.description}likes={likes}likeNumber={0} raisLikes={likeIncreas} showModal={this.props.handleShow} />) || ((this.state.beastHorns) === 0 && <HornedBeasts key ={index} title={beast.title} image_url={beast.image_url} description={beast.description}likes={likes}likeNumber={0} raisLikes={likeIncreas} showModal={this.props.handleShow} />);
                 })          
                }
            </Row>
            </>
        );
    }
}

export default Main;
