import React, {Component} from 'react';
import Form from './Form';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const OrangeRadio = withStyles({
    root: {
        '&$checked': {
            color: '#ff9800',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

class RadioInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.question.inputType.options[0]
        }
        this.subquestions = [];
        this.hasSubquestions = false;
    }

    componentDidMount(){
        this.storeQuestion(this.state.value);
    }

    handleChange = (event) => {
        let {value} = event.target;
        this.storeQuestion(value);
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
            return <FormControlLabel value={option} control={<OrangeRadio />} label={option} key = {'o' + index}/>
        })
    }
    subquestionsExist = (key) => {
        if(!this.props.question.inputType.subquestions) return false;
        if(!this.props.question.inputType.subquestions[key]) return false;
        if(this.props.question.inputType.subquestions[key].length === 0) return false;
        return true;
    }

    renderSubForm = (key) => {
        this.hasSubquestions = this.subquestionsExist(key);
        if(this.hasSubquestions === false) return null;
        return <Form form = {{questions: this.props.question.inputType.subquestions[key]}} subform onStateChange = {this.handleStateChange}/>
    }

    storeQuestion = (answer, type) => {
        this.hasSubquestions = this.subquestionsExist(answer);
        let completedQuestion = {
            question: this.props.question.question,
            answer
        }
        if(this.hasSubquestions === true) completedQuestion['completedSubquestions'] = this.subquestions;
        this.props.onStateChange(completedQuestion, this.props.index);
        this.props.requiredQuestion(true, this.props.index);
    }

    handleStateChange = (subquestions) => {
        if(this.hasSubquestions === false) return;
        this.subquestions = subquestions;
        this.storeQuestion(this.state.value, this.props.question.inputType.type)
    }
}

export default RadioInput;