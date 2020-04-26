import React, { Component } from 'react';

class App extends Component {
    componentDidMount(){
        this.props.getAllInsurances();
    }

    render() {
        console.log('BUSINESSES: ', this.props.insurances);
        return <div>DESDE ZERO</div>
    }
}
export default App;