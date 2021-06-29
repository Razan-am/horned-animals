import React from 'react';
import data from 
import {Form} from 'react-bootstrap';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            beastHorns= 0,
            show:false,
        }
    }
    hornsHandler = (e) =>{
        let hornsList = hornsData.filter(beast =>{
            return(beast.horns === e.target.value)
        });
        this.state({
            hornsList,
            beastHorns:e.target.value,
            show:true,
        })
        this.props.handlerSelect();
    }
    render() {
        return (
            <>
                 <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label> Custom Select </Form.Label>
                        <Form.Control as="select" onChange={(e) => this.hornsHandler(e)}>
                            <option value='0' >beasts</option>
                            <option value='1' >1</option>
                            <option value='2'>2</option>
                            <option value='3' >3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                    </Form.Group>
            </>
            {
                this.props.hideList && <main beastHorns={this.state.beastHorns}/>
            }
        )
    }
}

export default Form;
