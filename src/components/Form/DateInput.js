import React, {Component} from 'react';
import {TextField, FormLabel} from '@material-ui/core';

class DateInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: "2017-05-24"
        }
    }

    handleChange = (event) => {
        let {value} = event.target;
        this.setState({value});
    }

    render(){
        return <form noValidate>
                    <FormLabel>{this.props.question.question}</FormLabel>
                    <TextField
                    id="datetime-local"
                    type="date"
                    defaultValue = '2017-05-24'
                    value = {this.state.value}
                    InputLabelProps={{
                        shrink: true
                    }}
                    onChange = {this.handleChange}
                    />
                </form>;
    }
}

export default DateInput;