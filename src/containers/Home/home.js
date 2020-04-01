import React, { Component } from 'react';
import InsuranceService from '../../services/insurance';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            insurances: []
        }
        this.insuranceService = new InsuranceService();
    }

    componentDidMount(){
        this.insuranceService.getAllInsurances().then(response => {
            console.log('response----> ', response.data);
            this.setState({insurances: response.data});
        }, (error) => {
            console.log('[ERROR]', error);
        });
    }

    render() {
        return (
            this.state.insurances.length === 0 ?
            (<div>NO TENGO INSURANCES D:</div>)
            : (<div>YA TENGO INSURANCES :D</div>)
        )
    }
}

export default Home;