import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAllBusiness, getAllInsurances} from '../actions';

class App extends Component { 
    componentDidMount(){
        this.props.getAllBusiness();
    }

    render() {
        console.log('BUSINESS: ', this.props.bussinesses);
        return <div>DESDE CERO</div>
    }
}

const mapStateToProp = (state) => {
    return{
        bussinesses : state.businesses, 
        insurances : state.insurances
    }
}

export default connect(mapStateToProp, {getAllBusiness,getAllInsurances})(App);