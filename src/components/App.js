import React, { Component } from 'react';
import {connect} from 'react-redux'

import {changePath} from '../actions';

import LogIn from './LogIn';

class App extends Component { 
    componentDidMount(){
    }

    render() {
        console.log('CURRENT PATH: ', this.props.path);
        return this.props.path === '' ? 
                <LogIn/> : 
            this.props.path === 'home' ? 
                <div>ESTOY EN EL HOME</div> :
                <div>PAGE NOT FOUND</div>
    }
}

const mapStateToProp = (state) => {
    return {
        path: state.navigator.path
    }
}

export default connect(mapStateToProp, {changePath})(App);