import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllProducts, getProductsByInsurance} from './../../actions';

class Product extends Component{

    componentDidMount(){
        if(this.props.params.insurance){
            this.props.getProductsByInsurance(this.props.params.insurance._id);
        }else{
            this.props.getAllProducts();
        }
    }

    render(){
        console.log('PRODUCTS: ', this.props.products);
        return <div>PRODUCTS</div>
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
}

export default connect(mapStateToProps, {getAllProducts, getProductsByInsurance})(Product);