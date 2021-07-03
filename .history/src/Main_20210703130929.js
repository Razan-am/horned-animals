import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import Horned from './data.json';
import FormList from './FormBeast';


class Main extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            RenderedHorne: Horned,
        }
    }

    Filter = (event) => {
        let value = parseInt(event.target.value);

        let filteredArray = [];

        filteredArray = Horned.filter(element => {
            if (element.horns === value) { return true }

        }
        )
        this.setState({
            RenderedHorne: filteredArray
        })

        if (filteredArray.length === 0) {
            this.setState({
                RenderedHorne: Horned
            })
        }
    }


    render() {

        return (
            <div className="main">

                <FormList Filter={this.Filter} />

                {this.state.RenderedHorne.map((item, index) => {
                    return (
                        <HornedBeasts renderModal={this.props.renderModal} selectedAnimal={item.title} title={item.title} prag={item.description} url={item.image_url} keyValue={index} key={index} />
                    )
                })}

             

            </div>


        )
    }
}

export default Main;