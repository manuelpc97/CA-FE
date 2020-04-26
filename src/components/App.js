import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProductsByBussiness} from '../actions';

class App extends Component {
    componentDidMount(){
        this.props.getProductsByBussiness('5e840f1febff02463c5c8219');
    }

    render() {
        console.log('PRODUCTS: ', this.props.products);
        return <div>DESDE ZERO</div>
    }
}

const mapStateToProp = (state) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProp, {getProductsByBussiness})(App);