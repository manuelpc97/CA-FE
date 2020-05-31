import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from '@material-ui/core';
import ProductCard from './ProductCard';
import {getAllProducts, getProductsByInsurance, getAllBusiness, getAllCovers} from './../../actions';

class Product extends Component{
    constructor(props){
        super(props);
        this.manager = [];
    }

    async componentDidMount(){
        if(this.props.params.insurance){
            await this.props.getProductsByInsurance(this.props.params.insurance._id);
        }else{
            await this.props.getAllProducts();
        }
        await this.props.getAllBusiness();
        await this.props.getAllCovers();
    }

    render(){
        this.buildProductManager();
        return <Grid container spacing = {1}>
            {this.renderProducts()}
        </Grid>
    }

    buildProductManager = () => {
        if(this.props.products.length === 0 || this.props.businessList.length === 0 
            || this.props.covers.length === 0 || this.props.insurances.length === 0) return;
        
        this.manager = this.props.products.map(product => {
            let newProduct = Object.assign({}, product);
            newProduct.business = this.props.businessList.find(business => product.business === business._id);
            newProduct.covers = this.props.covers.filter(cover => cover.product === product._id);
            newProduct.insurance = this.props.insurances.find(insurance => insurance._id === product.insurance);
            return newProduct;
        });
    }

    renderProducts = () => {
        return this.manager.map((product, index) => {
            return <ProductCard product = {product} key = {index}/>
        })
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        businessList: state.business.businesses, 
        covers: state.cover.covers, 
        insurances: state.insurance.insurances
    }
}

export default connect(mapStateToProps, {getAllProducts, getProductsByInsurance, getAllBusiness, getAllCovers})(Product);