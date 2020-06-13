/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class InputSelect extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { formName, input, selectIndex, getValue } = this.props;
        const { inputType, question } = input;
        const { options } = inputType;
        return (
            <>
                <p id={`${formName}-question-label-${selectIndex}`}>{question}</p>
                <select className="custom-select" id={`${formName}-question-${selectIndex}`} onChange={getValue}>
                    {options.map((option, index) => <option key={`${index}-os`} value={option}>{option}</option>)}
                </select>
            </>
        )
    }
}

export default InputSelect;