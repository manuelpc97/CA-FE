import '../../styles/Input.css';
import React, { Component } from 'react';
import validateValue from '../../helpers/validate/regexInput';
import { isEmpty } from 'lodash';

class FileInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isValidValue: true,
            fileChoosed: 'Seleccionar Imagen'
        }
    }

    componentDidMount() {
        this.storeQuestion(this.state.value);
    }

    onValueChange = (event) => {
        let file = event.target.files[0];
        const reader = new FileReader();
        const state = this;
        if (!isEmpty(file.name)) {
            reader.onload = function (e) {
                state.setState({
                    value: e.target.result,
                })
                state.storeQuestion();
            }
            reader.readAsDataURL(file);
        } else {
            file = { name: 'Seleccionar Imagen' }
        }
        this.setState({ fileChoosed: file.name });
    }


    render() {
        return (
            <div className='input-container'>
                <label>{this.props.question.question}</label>
                <div className="custom-file">
                    <input type="file" className="fileInput" id={`input-file${this.props.index}`} accept="image/*" onChange={this.onValueChange} />
                    <label className="custom-file-label fileInput" for={`input-file${this.props.index}`}>
                        {this.state.fileChoosed}
                    </label>

                </div>
            </div>
        )
    }

    storeQuestion = () => {
        const isValid = !isEmpty(this.state.value);
        this.setState({ isValidValue: isValid })
        let completedQuestion = {
            question: this.props.question.question,
            answer: this.state.value
        }
        this.props.onStateChange(completedQuestion, this.props.index);
        const isRequired = this.props.question.inputType.required ? isValid : true;
        this.props.requiredQuestion(isRequired, this.props.index);
    }
}

export default FileInput;