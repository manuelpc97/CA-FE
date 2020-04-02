import React, {Component} from 'react';

class ProductCard extends Component{
    constructor(props){
        super(props);
        this.modalID = 'coverModal';
    }   

    render(){
        return (
            <div>
                <div class="card" style = {this.getCardStyle()}>
                    <h5 class="card-header">{this.props.business}</h5>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.insurance}</h5>
                        <p class="card-text">Prima Anual: HNL {this.props.product.yearPayment}</p>
                        <button type="button"
                                class="btn btn-primary" 
                                data-toggle="modal" 
                                data-target={'#' + this.modalID}
                                onClick = { () => this.props.onModalOpened(this.props.product, this.props.business)}>
                             Ver Cobertura
                        </button>
                    </div>
                </div> 
            </div>
            
        );
    }

    getCardStyle(){
        return {
            width: '700px',
            marginLeft: '300px',
            marginBottom: '50px',
            border: '2px solid'
        }
    }
}


export default ProductCard;