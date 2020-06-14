import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { TextField, FormLabel } from '@material-ui/core';

class DateInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.storeQuestion(this.state.value);
    }

    handleChange = (event) => {
        let { value } = event.target;
        this.storeQuestion(value);
        this.setState({ value });
    }

    render() {
        return <form noValidate>
            <FormLabel>{this.props.question.question}</FormLabel>
            <TextField
                id="datetime-local"
                type="date"
                value={this.state.value}
                InputLabelProps={{
                    shrink: true
                }}
                onChange={this.handleChange}
            />
        </form>;
    }

    storeQuestion = (answer) => {
        const isRequired = this.props.question.inputType.required ? !isEmpty(answer) : true;
        this.props.requiredQuestion(isRequired, this.props.index);

        let completedQuestion = {
            question: this.props.question.question,
            answer
        }

        this.props.onStateChange(completedQuestion, this.props.index);
    }
}

export default DateInput;