import React, {Component} from 'react';
import CoverTable from './CoverTable';

class CoverModal extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('PRODUCT: ', this.props.product);
        return (
        <div class="modal" tabIndex="-1" role="dialog" id = {this.props.modalID}>
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title">{this.props.business}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {this.getModalBody()}
                    {this.getModalFooter()}
                 </div>
            </div>
        </div>
        )
    }

    getModalBody(){
        return(
            <div class="modal-body">
                 <CoverTable 
                    covers = {this.props.product.covers}/>
            </div>
        );
    }

    getModalFooter(){
        return (
            <div class="modal-footer">
                <button type="button" 
                style = {{backgroundColor: 'rgb(255,89,63)'}}
                class="btn btn-primary close" 
                data-dismiss="modal" 
                onClick = {this.onContinue.bind(this)}
                data-toggle="modal" 
                data-target='#modalForm'>Sigo con Seguru</button>
                <button type="button" 
                style = {{backgroundColor: 'rgb(255,89,63)'}}
                    class="btn btn-primary  close"
                     type="button" 
                     data-dismiss="modal" 
                     onClick = {this.onFinish.bind(this)}
                    data-toggle="modal" 
                    data-target='#congratModal'>Llamada de Agente</button>
            </div>
        )
    }

    onContinue(){
        this.props.showForm();
    }

    onFinish(){
        this.props.showCongrat('FELICIDADES','En un momento te contactara un agente');
    }
}

export default CoverModal;