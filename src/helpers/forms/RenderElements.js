/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import CustomInput from "../../components/Common/CustomInput/CustomInput";
import RadioButton from "./htmlTags/RadioButton";
import InputSelect from "./htmlTags/InputSelect";
import Checkbox from "./htmlTags/Checkbox";

class RenderElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputsForms: [],
            subquestionsForm: [],
        }
    }

    componentDidMount() {
        this.getHTMLForm();
        this.createVariables();
    }

    createVariables = () => {
        const { formElements } = this.props;
        const { questions, formName } = formElements;
        const initialValueVariables = {};
        questions.map((element, index) => {
            initialValueVariables[`${formName}-question-${index}`] = '';
        })
        this.setState({ ...initialValueVariables, initialValueVariables })
    }

    getHTMLForm = () => {
        const { formElements } = this.props;
        const { questions, formName } = formElements;
        let inputsForms = [];
        questions.map((element, index) => {
            this.createHTMLElement(formName, element, inputsForms, index);
        });
        this.setState({ inputsForms })
    }

    getInputValues = (event, variable) => {
        let variableToChange = variable
        if (variableToChange === undefined) {
            variableToChange = event.target.id
        }
        this.setState({
            [variableToChange]: event.target.value
        })
        this.existSubquestion(variableToChange, event.target.value);
    }

    renderSubquestions = (formName, subquestions, questionIndex, variableName) => {
        const prefixId = `${formName}-${questionIndex}-delete`
        const { formElements: { questions } } = this.props;
        let subquestionsForm = [];
        const { inputsForms } = this.state;
        const appendSubquestions = inputsForms;
        console.log('questionIndex ---> ', questionIndex);
        // const previewSubquestions = document.querySelectorAll(`[id*="${questionIndex}-delete"]`);
        // console.log('previewSubquestions --> ', previewSubquestions);
        // console.log('(Number(previewSubquestions.length) > 0) ---> ', (Number(previewSubquestions.length) > 0));
        // if (Number(previewSubquestions.length) > 0) {
        //     console.log('entraaaa');
        //     array.splice(index, 1);
        //     previewSubquestions.forEach(questionHTML => questionHTML.parentNode.removeChild(questionHTML));
        // }
        const nodes = Array.prototype.slice.call(document.getElementById('form-formulario1').children);
        if (document.querySelector(`[id*="${questionIndex}-delete"]`) !== null) {
            const previewSubquestions = document.querySelector(`[id*="${questionIndex}-delete"]`).parentNode;
            const indexToDeleteSubquestions = nodes.indexOf(previewSubquestions);
            console.log('indexToDeleteSubquestions ---> ', indexToDeleteSubquestions);
            appendSubquestions.splice(indexToDeleteSubquestions, subquestions.length);
            console.log('appendSubquestions ----> ', appendSubquestions);
        }
        // setTimeout(function () {


        subquestions.map((element, index) => {
            this.createHTMLElement(prefixId, element, subquestionsForm, (Number(questions.length) + (index + 1)));
        });
        // const nodes = Array.prototype.slice.call(document.getElementById('form-formulario1').children);
        const subquestionParentNode = document.getElementById(variableName).parentNode;
        const indexToAppendSubquestions = nodes.indexOf(subquestionParentNode)
        appendSubquestions.splice((Number(indexToAppendSubquestions) + 1), 0, ...subquestionsForm);
        this.setState({ inputsForms: appendSubquestions })
        // }.bind(this), 2000);
    }

    existSubquestion = (variableName, value) => {
        const { formElements } = this.props;
        const { questions, formName } = formElements;
        const questionIndex = variableName.split("-")[2];
        const questionObject = questions[questionIndex];
        if (questionObject !== undefined) {
            if (questionObject.inputType.hasOwnProperty('subquestions')) {
                const subquestions = questionObject.inputType.subquestions[`${value}`];
                const subquestionsVariables = {};
                // console.log('subquestions ---> ', subquestions);
                // if (subquestions.length > 0) {
                subquestions.map((element, index) => {
                    subquestionsVariables[`${formName}-question-${Number(questions.length) + (index)}`] = '';
                })
                this.setState({ ...subquestionsVariables })
                this.renderSubquestions(formName, subquestions, questionIndex, variableName);
                // }
            }
        }

    }

    getCheckboxValues = (event) => {
        this.setState({
            [event.target.id]: event.target.checked
        })
    }

    createHTMLElement = (formName, input, html, indexElement) => {
        const { inputType, question } = input;
        const { tag, type, required, placeholder } = inputType;
        let htmlTag = '';
        switch (tag) {
            case 'input':
                htmlTag = <CustomInput
                    labelText={question}
                    id={`${formName}-question-${indexElement}`}
                    error={false}
                    inputProps={{
                        // value: this.state.username,
                        onChange: this.getInputValues
                    }}
                    formControlProps={{
                        fullWidth: true
                    }} />
                break;
            case 'radio':
                htmlTag = <RadioButton formName={formName} input={input} radioIndex={indexElement} getValue={this.getInputValues} />
                break;
            case 'select':
                htmlTag = <InputSelect formName={formName} input={input} selectIndex={indexElement} getValue={this.getInputValues} />
                break;
            case 'textarea':
                htmlTag = <CustomInput
                    labelText={question}
                    id={`${formName}-question-${indexElement}`}
                    formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        multiline: true,
                        rows: 3,
                        placeholder,
                        onChange: this.getInputValues
                    }}
                />
                break;
            case 'checkbox':
                htmlTag = <Checkbox formName={formName} input={input} checkboxId={indexElement} getValue={this.getCheckboxValues} />
                break;
            default:
                console.log('input is not supported');
                break;
        }
        html.push(htmlTag);
    }

    render() {
        const { inputsForms } = this.state;
        const { formElements: { formName } } = this.props;
        return (
            <>
                <div id={`form-${formName}`}>
                    {inputsForms.map((element, index) => {
                        return (
                            <div key={`${formName}-element-${index}`} id={`${formName}-element-${index}`}>
                                {element}
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default RenderElements