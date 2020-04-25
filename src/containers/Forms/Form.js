import React, {Component} from 'react';
import Input from './Input';
import {Redirect} from 'react-router-dom';
import $ from 'jquery';

class Form extends Component{
    constructor(props){
        super(props);
        this.questionsPerPage = 3;
        this.pages = this.props.questions.length / this.questionsPerPage;
        this.state = {
            currentPage: 1,
            submitted: false
        }
    }

    render(){
        return (
            this.state.submitted === true?
            <Redirect to={{
                pathname: '/comparison',
                state: { questions: this.props.questions }
            }}/>
            :<div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header text-center">
                                <h4 class="modal-title w-100 font-weight-bold">Seguro de Vehiculo</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body mx-3">
                                {this.props.visible === false? null :
                                    this.renderQuestions(this.state.currentPage)}
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                {this.getButtonForForm(this.state.currentPage)}
                            </div>
                        </div>
                    </div>
            </div>
        );
    }

    getButtonForForm(currentPage){
        const isLastButton = currentPage === this.pages;
        return isLastButton === true?
        this.props.type === 'lf'? 
        <button class="btn btn-unique btn-primary close"
            data-dismiss="modal"
            data-toggle="modal" 
            data-target='#congratModal'
            onClick = {this.onClick.bind(this)}>
            {this.getButtonText()}
            <i class="fas fa-paper-plane-o ml-1"></i>
        </button>
        :<button class="btn btn-unique btn-primary close"
            data-dismiss="modal"
            onClick = {this.onClick.bind(this)}>
            {this.getButtonText()}
            <i class="fas fa-paper-plane-o ml-1"></i>
        </button>
        :<button class="btn btn-unique btn-primary"
            style = {{backgroundColor: 'rgb(255,89,63)'}}
            onClick = {this.onClick.bind(this)}>
            {this.getButtonText()}
            <i class="fas fa-paper-plane-o ml-1"></i>
        </button>
    }

    onClick(){
        if(this.state.currentPage < this.pages){
            this.setState({currentPage: this.state.currentPage + 1});
        }else{
            if(this.props.type === 'sf'){
                this.handleSubmit();
            }else{
                this.props.showCongrat('FELICIDADES', 'Has obtenido tu seguro de vehiculo');
            }
        }
    }

    handleSubmit(){
        this.setState({submitted: true})
    }
    getButtonText(){
        return this.state.currentPage < this.pages ? 'SIGUIENTE' : 'LISTO';
    }

    renderQuestions(currentPage){
        let questions = [];
        let initialIndex = (currentPage-1) * this.questionsPerPage;
        let i;
        let finalIndex = initialIndex + this.questionsPerPage;

        for(i = initialIndex; i < finalIndex; i++){
            if(i < finalIndex){
              questions.push(<Input key = {i} question = {this.props.questions[i]}/>)  
            }
        }

        return questions;
    }
}

export default Form;