import React, {Component} from 'react';

class Label extends Component{
    render(){
        return <div><h4>{this.props.question.question}</h4></div>
    }
}

export default Label;