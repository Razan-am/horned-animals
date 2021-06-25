import React from 'react';
import HornedBeasts from './HornedBeasts';
import { Row } from 'react-bootstrap';

class Main extends React.Component {
    render() {

        let likes = [];

        let likeIncreas = (likeNumber) => {
            return likeNumber +1;
        };
        
        return (
            <Row>
                
                <HornedBeasts title={HornedBeastList[0].title} image_url={HornedBeastList[0].image_url} likes={likes}
                 likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[0].description} />
                <HornedBeasts title={HornedBeastList[1].title} image_url={HornedBeastList[1].image_url}
                 likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[1].description} />
                <HornedBeasts title={HornedBeastList[2].title} image_url={HornedBeastList[2].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[2].description} />
                <HornedBeasts title={HornedBeastList[3].title} image_url={HornedBeastList[3].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[3].description} />
                <HornedBeasts title={HornedBeastList[4].title} image_url={HornedBeastList[4].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[4].description} />
                <HornedBeasts title={HornedBeastList[5].title} image_url={HornedBeastList[5].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[5].description} />
                <HornedBeasts title={HornedBeastList[6].title} image_url={HornedBeastList[6].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[6].description} />
                <HornedBeasts title={HornedBeastList[7].title} image_url={HornedBeastList[7].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[7].description} />
                <HornedBeasts title={HornedBeastList[8].title} image_url={HornedBeastList[8].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[8].description} />
                <HornedBeasts title={HornedBeastList[9].title} image_url={HornedBeastList[9].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[9].description} />
                <HornedBeasts title={HornedBeastList[10].title} image_url={HornedBeastList[10].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[10].description} />
                

                <HornedBeasts title={HornedBeastList[11].title} image_url={HornedBeastList[11].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[11].description} />
                <HornedBeasts title={HornedBeastList[12].title} image_url={HornedBeastList[12].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[12].description} />
                <HornedBeasts title={HornedBeastList[13].title} image_url={HornedBeastList[13].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[13].description} />
                <HornedBeasts title={HornedBeastList[14].title} image_url={HornedBeastList[14].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[14].description} />
                <HornedBeasts title={HornedBeastList[15].title} image_url={HornedBeastList[15].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[15].description} />
                <HornedBeasts title={HornedBeastList[16].title} image_url={HornedBeastList[16].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[16].description} />
                <HornedBeasts title={HornedBeastList[17].title} image_url={HornedBeastList[17].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[17].description} />
                <HornedBeasts title={HornedBeastList[18].title} image_url={HornedBeastList[18].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[18].description} />
                <HornedBeasts title={HornedBeastList[19].title} image_url={HornedBeastList[19].image_url}  likeNumber={0} raisLikes={likeIncreas} description={HornedBeastList[19].description} />

                {/* <HornedBeasts titles={titleArray} images={imageArray} description={desArray}/> */}
            </Row>
        );
    }
}

export default Main;
