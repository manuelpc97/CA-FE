import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

import InsuranceCard from './InsuranceCard';

import {connect} from 'react-redux';
import {getAllInsurances} from '../../actions';

class Insurances extends Component{
    async componentDidMount(){
        await this.props.getAllInsurances();
    }

    render(){
        return <Grid container spacing = {1}>
                {this.getInsuranceCards()}
            </Grid>
    }

    getInsuranceCards = () => {
        return this.props.insurances.map((insurance, index) => {
            return <InsuranceCard insurance = {insurance} key = {index}/>
        })
    }
}

const mapStateToProps = (state) => {
    return {
        insurances: state.insurance.insurances
    };
}

export default connect(mapStateToProps, {getAllInsurances})(Insurances);