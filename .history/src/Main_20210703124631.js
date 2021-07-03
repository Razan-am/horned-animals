import React from 'react';
import HornedBeasts from './HornedBeasts';
import HornedList from './data.json';
import { Row } from 'react-bootstrap';


class Main extends React.Component {
    constructor(){
        super();
        this.state={
            honesData:HornedList,
            showModal: false,
            selectedHorned:{},
        };
    }
    handleShow = (data) => {
        this.setState({ 
          show: true,
          selectedHorned:data,
    
        });
      }
      handleClose = () =>{
        this.setState({
          show:false,
        });
      }
    
    render() {

        let likes = [];

        let likeIncreas = (likeNumber) => {
            return likeNumber +1;
        };
        
        return (
            <Row>
                {
 
                    HornedList.map((beast,index) =>{
                    return <HornedBeasts 
                    key ={index} title={beast.title} image_url={beast.image_url} likes={likes}
                    likeNumber={0} raisLikes={likeIncreas} description={beast.description} showModal={this.props.handleShow} handleShow ={this.handleShow} selectedHorned ={this.state.selectedHorned}/>;
                    <HornedList/>
   
                 })
                
                }

            </Row>
        );
    }
}

export default Main;
