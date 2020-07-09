import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

import InsuranceCard from './InsuranceCard';
import Form from './../Form/Form';

import {connect} from 'react-redux';
import {getAllInsurances, clearForm,selectTab, getFormById} from '../../actions';

class Insurances extends Component{
    constructor(props){
        super(props); 
        this.state = {
            showForm: false,
            insurance: {}
        }
    }

    async componentDidMount(){
        await this.props.getAllInsurances();
    }

    render(){
        return this.state.showForm === false ? 
                <Grid container spacing = {1}>
                    {this.getInsuranceCards()}
                </Grid> : 
                <Form 
                    form = {this.props.form} 
                    parentForm = {true} 
                    handleBack = {this.onBack} 
                    handleSubmit = {this.onSuccess} 
                    insurance = {this.state.insurance}/>
    }
    
    getInsuranceCards = () => {
        return this.props.insurances.map((insurance, index) => {
            return <InsuranceCard insurance = {insurance} key = {index} handleClick = {this.onCardClick}/>
        })
    }

    showForm = () => {
        this.setState({showForm: true});
    }

    dismissForm = () => {
        this.setState({showForm: false});
    }

    onBack = () => {
        this.setState({insurance: {}});
        this.props.clearForm();
        this.dismissForm();
    }

    onSuccess = () => {
        this.props.selectTab(2, {})
    }

    onCardClick = async (insurance) => {
        this.setState({insurance});
        if(!insurance.form) {
            this.onSuccess();
        }else{
            await this.props.getFormById(insurance.form);
            if(this.props.hasForm === true){
                this.showForm();
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        insurances: state.insurance.insurances,
        form: state.form.form, 
        hasForm: state.form.hasForm
    };
}

export default connect(mapStateToProps, {getAllInsurances, clearForm, selectTab, getFormById})(Insurances);