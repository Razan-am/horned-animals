import React from 'react';
import HornedBeasts from './HornedBeasts';
<<<<<<< HEAD
import hornedBeastList from './data.json';
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
                    return <HornedBeasts 
                    key ={index} title={beast.title} image_url={beast.image_url} likes={likes}
                    likeNumber={0} raisLikes={likeIncreas} description={beast.description} />;
   
                 })
                
                }

            </Row>
=======

class Main extends React.Component {
    render() {
        let HornedBeastList = [{
            title: "UniWhal",
            image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
            description: "A unicorn and a narwhal nuzzling their horns",
          },
      
          {
            title: "Rhino Family",
            image_url: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
            description: "Mother (or father) rhino with two babies",
          },
          ];
        return (
            <div>
                <HornedBeasts title={HornedBeastList[0].title} image_url={HornedBeastList[0].image_url} description={HornedBeastList[0].description}/>
                <HornedBeasts title={HornedBeastList[1].title} image_url={HornedBeastList[1].image_url} description={HornedBeastList[1].description}/>
            </div>
>>>>>>> dd22af2dd7503643fffc982ebcac824058145b80
        );
    }
}

export default Main;
