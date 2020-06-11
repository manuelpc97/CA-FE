import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import Input from './Input';

class Form extends Component{
    constructor(props){
        super(props);
        this.completedForm = {}
        if(!this.props.subform) this.completedForm['formName'] = this.props.form.formName;
        this.completedForm['completedQuestions'] = [];
    }
    componentDidMount(){

    }

    render(){
        return <Grid container spacing = {1}>
            {this.renderQuestions()}
        </Grid>
    }

    renderQuestions = () => {
        return this.props.form.questions.map((question, index) => {
            this.completedForm.completedQuestions.push({});
            return (
                    <Grid item sm = {12} key = {'q' + index}>
                        <Grid container spacing = {1}>
                            <Grid item sm = {3}/>
                            <Input question = {question} onStateChange = {this.handleStateChange} index = {index}/> 
                            <Grid item sm = {3}/>
                        </Grid>
                    </Grid>
                )
        })
    }

    handleStateChange = (completedQuestion, index) => {
        this.completedForm.completedQuestions[index] = completedQuestion;
        if(this.props.subform) this.props.onStateChange(this.completedForm.completedQuestions);
        if(!this.props.subform) console.log('FORM: ', this.completedForm);
    }
}

export default Form;