import '../../styles/Input.css';
import React, { Component } from 'react';
import CustomInput from '../Common/CustomInput/CustomInput';
import validateValue from '../../helpers/validate/regexInput';
import { isEmpty } from 'lodash';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isValidValue: false,
        }
    }

    componentDidMount() {
        this.storeQuestion(this.state.value);
    }

    onValueChange = (event) => {
        let { value } = event.target;
        this.storeQuestion(value, this.props.question.inputType.type);
        this.setState({ value });
    }

    getInputType = () => {
        return this.props.question.inputType.type === 'alpha' ? 'text' : this.props.question.inputType.type;
    }

    render() {
        return (
            <div className = 'input-container'>
                <CustomInput
                    labelText={this.props.question.question}
                    error={!this.state.isValidValue}
                    inputProps={{
                        value: this.state.value,
                        onChange: this.onValueChange,
                        type: this.getInputType(),
                        multiline: this.props.question.inputType.tag === 'textarea',
                        rows: this.props.question.inputType.tag === 'textarea' ? 5 : 1
                    }}
                    formControlProps={{
                        fullWidth: true
                    }}
                />
                {
                    !this.state.isValidValue ? <p style={{
                        fontSize: '11px',
                        color: 'red'
                    }}>{this.props.question.question} invalido.</p> : ''
                }
            </div>
        )
    }

    storeQuestion = (answer, type) => {
        const isValid = validateValue(answer, type);
        this.setState({ isValidValue: isValid })
        if (isValid) {
            let completedQuestion = {
                question: this.props.question.question,
                answer
            }
            this.props.onStateChange(completedQuestion, this.props.index);
        }
        const isRequired = this.props.question.inputType.required ? isValid && !isEmpty(answer) : true;
        this.props.requiredQuestion(isRequired, this.props.index);
    }
}

export default TextInput;