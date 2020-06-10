import React, {Component} from 'react';
import {FormControl, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core';

class CheckBoxInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false
        }
    }

    handleChange = (event) => {
        let {checked} = event.target;
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
}

export default CheckBoxInput;