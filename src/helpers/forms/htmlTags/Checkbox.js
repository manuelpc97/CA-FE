import React, { Component } from 'react';

class Checkbox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const { formName, input: { question }, checkboxId, getValue } = this.props;
        return (
            <div className="input-group-text">
                <input type="checkbox" id={`${formName}-question-${checkboxId}`} style={{ marginRight: '6px' }} onChange={(e) => getValue(e)}/>
                {question}
            </div>
        )
    }
}

export default Checkbox;