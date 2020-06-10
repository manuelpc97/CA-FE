import React, {Component} from 'react';
import Form from './Form';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';

class RadioInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.question.inputType.options[0]
        }
    }

    handleChange = (event) => {
        let {value} = event.target;
        this.setState({value});
    }
    
    render(){
        return <div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">{this.props.question.question}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.value} onChange={this.handleChange}>
                            {this.renderOptions()}
                        </RadioGroup>
                        {this.renderSubForm(this.state.value)}
                    </FormControl>
                </div>
    }

    renderOptions = () => {
        return this.props.question.inputType.options.map((option, index) => {
            return <FormControlLabel value={option} control={<Radio />} label={option} key = {'o' + index}/>
        })
    }

    renderSubForm = (key) => {
        if(!this.props.question.inputType.subquestions) return null;
        if(!this.props.question.inputType.subquestions[key]) return null;
        return <Form form = {{questions: this.props.question.inputType.subquestions[key]}}/>
    }
}

export default RadioInput;