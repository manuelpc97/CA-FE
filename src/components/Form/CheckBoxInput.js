import '../../styles/Input.css'
import React, { Component } from 'react';
import { FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const OrangeCheckbox = withStyles({
    root: {
        '&$checked': {
            color: '#ff9800',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

class CheckBoxInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    componentDidMount() {
        this.storeQuestion(this.state.checked);
    }

    handleChange = (event) => {
        let { checked } = event.target;
        this.storeQuestion(checked);
        this.setState({ checked });
    }

    render() {
        return <FormControl component="fieldset" className = 'input-container'>
            <FormGroup>
                <FormControlLabel
                    control={<OrangeCheckbox checked={this.state.checked} onChange={this.handleChange} name="check" />}
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
        const isRequired = this.props.question.inputType.required ? checked : true;
        this.props.requiredQuestion(isRequired, this.props.index);
        this.props.onStateChange(completedAnswer, this.props.index);
    }
}

export default CheckBoxInput;