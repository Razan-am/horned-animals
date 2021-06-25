import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.stateo={
            beastHorns= 0,
        }
    }
    hornsHandler = (e) =>{
        let horns = hornsData.filter(i =>{
            return(beast.horns === e.target.value)
        });
        this.state({
            horns,
            beastHorns:e.target.value,
            show:true,
        })
        this.props.handl
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Form;
