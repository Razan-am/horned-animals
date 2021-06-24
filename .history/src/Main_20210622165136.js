import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornedBeastList from './data.json';
import { Row } from 'react-bootstrap';


class Main extends React.Component {
    const modal = (show) => {
        if (show === true){
            return this.showModal;
        }else{
            return this.hideModal;
        }
    };

    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
      dataFunction = () => {
        this.setState({ show: this.props.updateState(this.state.show)});
      }
    render() {

        let likes = [];

        let likeIncreas = (likeNumber) => {
            return likeNumber +1;
        };
        return (
            <Row>
                {

                 hornedBeastList.map((beast,index) =>{
                    return <HornedBeasts 
                    key ={index} title={beast.title} image_url={beast.image_url} likes={likes}
                    likeNumber={0} raisLikes={likeIncreas} updateState={this.modal} description={beast.description} />;
   
                 })
                
                }

            </Row>


        );
    }
}

export default Main;
