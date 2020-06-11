import React, {Component} from 'react';
import Form from './Form';
import {FormLabel, Select, MenuItem, FormControl} from '@material-ui/core';

class SelectInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '', 
            open: false
        }

        this.subquestions = [];
        this.hasSubquestions = false;
    }

    componentDidMount(){
        this.storeQuestion(this.state.value);
    }

    handleClose = () => {
        this.setState({open: false});
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleChange = (event) => {
        let {value} = event.target;
        this.storeQuestion(value);
        this.setState({value});
    }

    render(){
        return <div>
                <FormControl className = 'select-input'>
                    <FormLabel component="legend">{this.props.question.question}</FormLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.value}
                        onChange={this.handleChange}
                        className = 'select-component'
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {this.renderOptions()}
                    </Select>
                </FormControl>
                {this.renderSubQuestions(this.state.value)}
            </div>
        
    }

    renderOptions = () => {
        return this.props.question.inputType.options.map((option, index) => {
            return <MenuItem value={option} key = {'s' + index}>{option}</MenuItem>
        })
    }

    subquestionsExist = (key) => {
        if(!this.props.question.inputType.subquestions) return false;
        if(!this.props.question.inputType.subquestions[key]) return false;
        if(this.props.question.inputType.subquestions[key].length === 0) return false;
        return true;
    }

    renderSubQuestions = (key) => {
        this.hasSubquestions = this.subquestionsExist(key);
        if(this.hasSubquestions === false) return null;
        return <Form form = {{questions: this.props.question.inputType.subquestions[key]}} subform onStateChange = {this.handleStateChange}/>
    }

    storeQuestion = (answer) => {
        this.hasSubquestions = this.subquestionsExist(answer);
        let completedQuestion = {
            question: this.props.question.question,
            answer
        }

        if(this.hasSubquestions === true) completedQuestion['completedSubquestions'] = this.subquestions;
        this.props.onStateChange(completedQuestion, this.props.index);
    }

    handleStateChange = (subquestions) => {
        if(this.hasSubquestions === false) return;
        this.subquestions = subquestions;
        this.storeQuestion(this.state.value)
    }
}

export default SelectInput;