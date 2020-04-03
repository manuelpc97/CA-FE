import React, {Component} from 'react';

class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange(event){
        this.props.question.answer = event.target.value;
        this.setState({value: event.target.value});
    }

    render(){
        console.log('Here on question: ', this.props.question);
        return (
            <div class="md-form mb-5">
                <label>{this.props.question.question}</label>
                <input type={this.props.question.type} 
                    id={"form" + this.props.question.id} 
                    class="form-control validate"
                    value = {this.state.value}
                    onChange = {this.handleChange.bind(this)}/>
                <label data-error="wrong" data-success="right" for="form34"></label>
            </div>
        );
    }
    
}


export default Input;