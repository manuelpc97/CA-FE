import '../../styles/Form.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveFilledForm, promptError, promptNotification } from './../../actions';

import { Grid } from '@material-ui/core';

import Input from './Input';
import Button from "../Common/CustomButtons/Button.js";
import Card from '../Common/Card/Card';
import CardHeader from '../Common/Card/CardHeader';
import CardBody from '../Common/Card/CardBody';
import CardFooter from '../Common/Card/CardFooter';

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

    render() {
        return (!this.props.subform ? <>
            <Grid container item xs={12} md={12} sm={12} lg={12} spacing={0} zeroMinWidth={true}>
                <Grid item sm={2} />
                <Grid item sm={8}>
                    <Card>
                        <CardHeader color='warning'>
                            <h3>{this.props.form.formName}</h3>
                        </CardHeader>
                        <CardBody className='form-body'>
                            {this.renderQuestions()}
                        </CardBody>
                        <CardFooter>
                            <div>
                                {this.renderBackButton()}
                                {this.renderSubmitButton()}
                            </div>
                        </CardFooter>
                    </Card>
                </Grid>
                <Grid item sm={2} />
            </Grid>
        </> : this.renderQuestions())
    }

    renderSubmitButton = () => {
        const submitButton = this.props.parentForm ?
            <Button color="warning" type="button" onClick={this.handleClick}>
                Guardar
                </Button>
            : '';
        return submitButton;
    }

    renderBackButton = () => {
        return this.props.parentForm ?
            <Button color="warning" type="button" onClick={this.props.handleBack}>
                Regresar
                    </Button>
            : '';
    }

    renderQuestions = () => {
        const shouldInitializeArray = (this.props.form.questions.length !== this.completedForm.completedQuestions.length);
        return this.props.form.questions.map((question, index) => {
            if (shouldInitializeArray === true) {
                let questionObject = {};
                if (question.inputType.tag === 'label') questionObject['label'] = question.question
                this.completedForm.completedQuestions.push(questionObject);
            }
            return <Input
                question={question}
                onStateChange={this.handleStateChange}
                requiredQuestion={this.handleRequiredQuestions}
                index={index}
                key={'k' + index} />
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

    handleClick = () => {
        if (this.state.pendingRequiredAnswers) {
            this.props.promptError('Formulario Incompleto');
            return;
        }
        //TODO Save answer in database
        console.log('this.completedForm ---> ', this.completedForm);
        console.log('this.props.insurances ---> ', this.props.insurances);
        this.saveForm();
        //await this.props.saveFilledForm(this.completedForm, this.props.user._id, 'productId')
        this.props.promptNotification('Formulario guardado', 'success');
        this.props.handleSubmit();
    }

    saveForm = async () => {
        const { error } = this.props;
        await this.props.saveFilledForm(this.completedForm, this.props.user._id, 'productId')
        if(!error.error){
            this.props.promptNotification('Formulario guardado exitosamente', 'success');
            this.props.changePath('');
        }else{
            console.log('error --->', error.message);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser,
        insurances: state.insurance.insurances,
    }
}

export default connect(mapStateToProps, { saveFilledForm, promptError, promptNotification })(Form);