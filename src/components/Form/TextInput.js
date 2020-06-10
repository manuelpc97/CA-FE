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
        console.log('MANUELITO: ', this.props.question);
    }

    onValueChange = (event) => {
        let {value} = event.target;
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
}

export default TextInput;