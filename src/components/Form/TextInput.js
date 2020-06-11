import React, {Component} from 'react';
import CustomInput from '../Common/CustomInput/CustomInput';


class TextInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount(){
        this.storeQuestion(this.state.value);
    }

    onValueChange = (event) => {
        let {value} = event.target;
        this.storeQuestion(value);
        this.setState({value});
    }

    getInputType = () => {
        return this.props.question.inputType.type === 'alphanumeric' ? 'text' : this.props.question.inputType.type;
    }

    render(){
        return <CustomInput
            labelText = {this.props.question.question}
            inputProps = {{
                value: this.state.value,
                onChange: this.onValueChange, 
                type: this.getInputType(),
                multiline: this.props.question.inputType.tag === 'textarea',
                rows: this.props.question.inputType.tag === 'textarea' ? 5 : 1
            }}
            formControlProps={{
                fullWidth: true
            }}
        />;
    }

    storeQuestion = (answer) => {
        let completedQuestion = {
            question: this.props.question.question,
            answer
        }

        this.props.onStateChange(completedQuestion, this.props.index);
    }
}

export default TextInput;