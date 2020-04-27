import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAllBusiness, getAllInsurances, logIn} from '../actions';

class App extends Component { 
    componentDidMount(){
        this.props.getAllBusiness();
        this.props.getAllInsurances();
        this.props.logIn('manu','manu123');
    }

    render() {
        console.log('BUSINESS: ', this.props.bussinesses);
        console.log('INSURANCES: ', this.props.insurances);
        console.log('USER: ', this.props.currentUser);
        console.log('AUTH: ', this.props.isAuth);
        return <div>DESDE CERO</div>
    }
}

const mapStateToProp = (state) => {
    return{
        bussinesses : state.business.businesses, 
        insurances: state.insurance.insurances, 
        currentUser: state.user.currentUser, 
        isAuth: state.user.isAuth
    }
}

export default connect(mapStateToProp, {getAllBusiness,getAllInsurances, logIn})(App);