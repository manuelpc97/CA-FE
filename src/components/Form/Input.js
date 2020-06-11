import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

import TextInput from './TextInput';
import RadioInput from './RadioInput';
import SelectInput from './SelectInput';
import CheckBoxInput from './CheckBoxInput';
import DateInput from './DateInput';

class Input extends Component{
    render(){
        return <Grid item sm = {6}>
            {this.renderInput()}
        </Grid>
    }

    renderInput = () => {
        let element;

        switch(this.props.question.inputType.tag){
            case 'input': 
            case 'textarea':
                element = <TextInput question = {this.props.question} onStateChange = {this.props.onStateChange} index = {this.props.index}/>
            break;

            case 'radio':
                element = <RadioInput question = {this.props.question} onStateChange = {this.props.onStateChange} index = {this.props.index}/>
            break;

            case 'select':
                element = <SelectInput question = {this.props.question} onStateChange = {this.props.onStateChange} index = {this.props.index}/>
            break;

            case 'checkbox':
                element = <CheckBoxInput question = {this.props.question} onStateChange = {this.props.onStateChange} index = {this.props.index}/>
            break;

            case 'calendar':
                element = <DateInput question = {this.props.question} onStateChange = {this.props.onStateChange} index = {this.props.index}/>
            break;

            default:
                element = null
            break;
        }

        return element;
    }
}

export default Input;