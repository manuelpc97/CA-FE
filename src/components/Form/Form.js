import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Input from './Input';
import Button from "../Common/CustomButtons/Button.js";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingRequiredAnswers: true
        }
        this.completedForm = {}
        if (!this.props.subform) this.completedForm['formName'] = this.props.form.formName;
        this.completedForm['completedQuestions'] = [];
        this.answersRequired = [];
    }
    componentDidMount() {

    }

    render() {
        return (<>
            <Grid container spacing={1}>
                {this.renderQuestions()}
            </Grid>
            <div className="submitButton">
                <Button disabled={this.state.pendingRequiredAnswers} color="primary" type="button" onClick={this.createUser}>
                    Guardar
                </Button>
            </div>
        </>)
    }

    renderQuestions = () => {
        return this.props.form.questions.map((question, index) => {
            this.completedForm.completedQuestions.push({});
            return (
                <Grid item sm={12} key={'q' + index}>
                    <Grid container spacing={1}>
                        <Grid item sm={3} />
                        <Input question={question} onStateChange={this.handleStateChange} requiredQuestion={this.handleRequiredQuestions} index={index} />
                        <Grid item sm={3} />
                    </Grid>
                </Grid>
            )
        })
    }

    handleStateChange = (completedQuestion, index) => {
        this.completedForm.completedQuestions[index] = completedQuestion;
        if (this.props.subform) this.props.onStateChange(this.completedForm.completedQuestions);
        if (!this.props.subform) console.log('FORM: ', this.completedForm);
    }

    handleRequiredQuestions = (wasAnswered, index) => {
        this.answersRequired[index] = wasAnswered;
        const pendingRequiredAnswers = this.answersRequired.includes(false);
        this.setState({ pendingRequiredAnswers })
    }
}

export default Form;