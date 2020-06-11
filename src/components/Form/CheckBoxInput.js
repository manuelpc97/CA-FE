import React, {Component} from 'react';
import {FormControl, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core';

class CheckBoxInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false
        }
    }

    componentDidMount(){
        this.storeQuestion(this.state.checked);
    }

    handleChange = (event) => {
        let {checked} = event.target;
        this.storeQuestion(checked);
        this.setState({checked});
    }

    render(){
        return <FormControl component="fieldset">
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={this.state.checked} onChange={this.handleChange} name="check" />}
                                label={this.props.question.question}
                            />
                        </FormGroup>
                </FormControl>
    }

    storeQuestion = (checked) => {
        let completedAnswer = {
            question: this.props.question.question, 
            checked
        }
        this.props.onStateChange(completedAnswer, this.props.index);
    }
}

export default CheckBoxInput;