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

        /**
         *   this.setState({
            [event.target.id]: event.target.value
        })
         */
    }

    getInputValues = (event, variable) => {
        let variableToChange = variable
        if (variableToChange === undefined) {
            variableToChange = event.target.id
        }
        this.setState({
            [variableToChange]: event.target.value
        })
        console.log('getValues!!!!');
        this.existSubquestion(variableToChange, event.target.value);
    }

    existSubquestion = (variableName, value) => {
        const { formElements } = this.props;
        const { questions } = formElements;
        const questionIndex = variableName.split("-")[2];
        const questionObject = questions[questionIndex];
        if (questionObject.inputType.hasOwnProperty('subquestions')) {
            console.log('entraaaa');
            const subquestions = questionObject.inputType.subquestions[`${value}`];
            console.log('subquestions---> ', subquestions);
        }
    }

    getCheckboxValues = (event) => {
        this.setState({
            [event.target.id]: event.target.checked
        })
        console.log('getCheckboxValues!!!!');
    }

    renderSubquestions = (subquestions) => {
        let subquestionsForm = [];
        subquestions.map((element, index) => {
            this.createHTMLElement(element, subquestionsForm, index);
        });
        this.setState({ subquestionsForm })
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
                htmlTag = < Checkbox formName={formName} input={input} checkboxId={indexElement} getValue={this.getCheckboxValues} />
                break;
            default:
                console.log('input is not supported');
                break;
        }
        html.push(htmlTag);
    }
    render() {
        const { inputsForms } = this.state;
        console.log('values ---> ', this.state);
        return (
            <>
                {inputsForms.map((element, index) => {
                    return (
                        <div key={`form-element-${index}`}>
                            {element}
                        </div>
                    )
                })}
            </>
        )
    }
}

export default RenderElements