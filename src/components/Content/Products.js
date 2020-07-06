import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from '@material-ui/core';
import ProductCard from './ProductCard';
import ProductChart from './ProductChart';
import Form from './../Form/Form';
import {getAllProducts, 
    getProductsByInsurance, 
    getAllBusiness, 
    getAllCovers,
    getFormById, 
    clearForm, 
    promptNotification} from './../../actions';

class Product extends Component{
    constructor(props){
        super(props);
        this.manager = [];
        this.state = {
            showTable: false,
            currentProduct: {},
            showForm: false
        }
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
            {this.state.showTable === true ? this.renderTable() : 
            ( this.state.showForm === true? this.renderForm() :
            this.renderProducts()) }
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
            return <ProductCard product = {product} key = {index} onSelect = {this.onSelectCard}/>
        })
    }

    renderTable = () => {
        return <ProductChart 
                product = {this.state.currentProduct} 
                handleBack = {this.returnToProducts} 
                handleForm = {this.openForm} 
                handleAgent = {this.handleAgentContact}/>
    }

    renderForm = () => {
        return <Form form = {this.props.form} parentForm = {true} handleBack = {this.handleFormBack}/>
    }

    returnToProducts = () => {
        this.setState({currentProduct: {}, showTable: false, showForm: false});
    }

    onSelectCard = (currentProduct) => {
        this.setState({currentProduct, showTable: true, showForm: false});
    }

    openForm = async () =>{
        console.log(this.state.currentProduct);
        if(!this.state.currentProduct.form){
            this.props.promptNotification('Formulario no disponible', "warning");
            return;
        }

        await this.props.getFormById(this.state.currentProduct.form);
        if(this.props.hasForm === true){
            this.setState({showForm: true, showTable: false})
        }
    }

    handleAgentContact = () => {
        //TODO handle agent comunication
        this.props.promptNotification('Contacto enviado al agente', 'success');
    }

    handleFormBack = () => {
        this.setState({showForm: false, showTable: true});
    }

    handleFormSubmit = () => {
        //TO DO logic for sending the form in an email
        this.handleFormBack();
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        businessList: state.business.businesses, 
        covers: state.cover.covers, 
        insurances: state.insurance.insurances,
        form: state.form.form,
        hasForm: state.form.hasForm
    }
}

const actions = {getAllProducts, 
                getProductsByInsurance, 
                getAllBusiness, 
                getAllCovers, 
                getFormById, 
                clearForm, 
                promptNotification};

export default connect(mapStateToProps, actions)(Product);