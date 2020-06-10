import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import Input from './Input';

class Form extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('MANUELITO FORMS: ', this.props.form);
    }

    render(){
        return <Grid container spacing = {1}>
            {this.renderQuestions()}
        </Grid>
    }

    renderQuestions = () => {
        return this.props.form.questions.map((question, index) => {
            return (
                    <Grid item sm = {12} key = {'q' + index}>
                        <Grid container spacing = {1}>
                            <Grid item sm = {3}/>
                            <Input question = {question} /> 
                            <Grid item sm = {3}/>
                        </Grid>
                    </Grid>
                )
        })
    }
}

export default Form;