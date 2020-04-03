import React, {Component} from 'react';
import Input from './Input';

class Form extends Component{
    constructor(props){
        super(props);
        this.questionsPerPage = 3;
        this.pages = this.props.questions.length / this.questionsPerPage;
        this.state = {
            currentPage: 1
        }
    }

    render(){
        return (
            <div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
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
                                <button class="btn btn-unique btn-primary"
                                    onClick = {this.onClick.bind(this)}>
                                    {this.getButtonText()}
                                    <i class="fas fa-paper-plane-o ml-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }

    onClick(){
        if(this.state.currentPage < this.pages){
            this.setState({currentPage: this.state.currentPage + 1});
        }else{
            console.log('QUESTIONS: ', this.props.questions);
        }
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