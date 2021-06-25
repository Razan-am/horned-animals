import React, { Component } from 'react'
import HornedBeasts from "./HornedBeasts.js";
import hornedData from "./data.json";

import { Row } from 'react-bootstrap';
import SelectedBeast from "./SelectedBeast";


class Main extends Component {

    // filteredHornes = () => { hornedData.filter(hornedData => hornedData.horns) };
    constructor(props) {
        super(props);
        this.state = {
            hideList: false,
        }
    }
    handelSelect = () => {
        this.state = ({
            hideList: true
        })
    }


    render() {
        console.log(this.props)
        // console.log(filteredHornes);


        let likeIncreas = (likeNumber) => {
            return likeNumber + 1;
        };


        return (

            <Row>
                {
                    hornedData.map((beast) => {
                        return (Number(this.state.horns) === beast.horns &&
                            <HornedBeasts title={beast.title} img={beast.image_url} description={beast.description}
                                likeNumber={0} raisLikes={likeIncreas} modal={this.props.selectedBeast} />) || (Number(this.state.horns) === 0 &&
                                    <HornedBeasts title={beast.title} img={beast.image_url} description={beast.description}
                                        likeNumber={0} raisLikes={likeIncreas} modal={this.props.selectedBeast} />)
                    })
                }
                {/* < HornedBeasts title={hornedData[0].title} img={hornedData[0].image_url} description={hornedData[0].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={this.showModal} />
                < HornedBeasts title={hornedData[1].title} img={hornedData[1].image_url} description={hornedData[1].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg} />
                < HornedBeasts title={hornedData[2].title} img={hornedData[2].image_url} description={hornedData[2].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[3].title} img={hornedData[3].image_url} description={hornedData[3].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[4].title} img={hornedData[4].image_url} description={hornedData[4].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[5].title} img={hornedData[5].image_url} description={hornedData[5].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[6].title} img={hornedData[6].image_url} description={hornedData[6].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[7].title} img={hornedData[7].image_url} description={hornedData[7].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[8].title} img={hornedData[8].image_url} description={hornedData[8].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[9].title} img={hornedData[9].image_url} description={hornedData[9].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[10].title} img={hornedData[1].image_url} description={hornedData[10].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[11].title} img={hornedData[11].image_url} description={hornedData[11].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[12].title} img={hornedData[12].image_url} description={hornedData[12].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[13].title} img={hornedData[13].image_url} description={hornedData[13].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[14].title} img={hornedData[14].image_url} description={hornedData[14].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[15].title} img={hornedData[15].image_url} description={hornedData[15].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[16].title} img={hornedData[16].image_url} description={hornedData[16].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[17].title} img={hornedData[17].image_url} description={hornedData[17].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[18].title} img={hornedData[18].image_url} description={hornedData[18].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/>
                < HornedBeasts title={hornedData[19].title} img={hornedData[19].image_url} description={hornedData[19].description} likeNumber={0} raisLikes={likeIncreas} alertMsg={alertsMesg}/> */}

            </Row>


        )
    }
}

export default Main