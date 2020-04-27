import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAllBusiness, getAllInsurances} from '../actions';

class App extends Component { 
    componentDidMount(){
        this.props.getAllBusiness();
        this.props.getAllInsurances();
    }

    render() {
        console.log('BUSINESS: ', this.props.bussinesses);
        console.log('INSURANCES: ', this.props.insurances);
        return <div>DESDE CERO</div>
    }
}

const mapStateToProp = (state) => {
    return{
        bussinesses : state.business.businesses, 
        insurances: state.insurance.insurances
    }
}

export default connect(mapStateToProp, {getAllBusiness,getAllInsurances})(App);