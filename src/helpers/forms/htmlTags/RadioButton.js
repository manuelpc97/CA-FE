/* eslint-disable react/prop-types */
import React, { Component } from 'react';
class RadioButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { formName, input, radioIndex, getValue } = this.props;
        const { inputType, question } = input;
        const { options } = inputType;
        return (
            <>
                <p id={`${formName}-question-label-${radioIndex}`}>{question}</p>
                {options.map((option, index) => {
                    return (
                        <div className="form-check" key={`${index}-rb`} id={`${formName}-question-${radioIndex}`}>
                            <input className="form-check-input"
                                type="radio" name={`rb-${radioIndex}-group`}
                                id={`${option}-rd`} value={option}
                                onChange={(e) => getValue(e, `${formName}-question-${radioIndex}`)}
                            />
                            <label className="form-check-label" htmlFor={`${option}-rd`}>{option}</label>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default RadioButton;