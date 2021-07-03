import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import hornedData from './data.json';
import FormList from './FormBeast';


class Main extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            hornedData: hornedData,
        };
    }




    render() {

        return (
            <div className="main">

                <FormList Filter={this.Filter} />

                {this.state.hornedData.map((item, index) => {
                    return (
                        <HornedBeasts handleShow={this.props.handleShow} selectedBeast={item.title} title={item.title} prag={item.description} url={item.image_url} keyValue={index} key={index} />
                    );
                })}

             

            </div>


        );
    }
}

export default Main;

