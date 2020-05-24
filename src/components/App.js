import React, { Component } from 'react';
import {connect} from 'react-redux'

import LogIn from './LogIn/LogIn';
import Home from './Home';

class App extends Component { 
    componentDidMount(){
        
    }

    render() {
        console.log('CURRENT PATH: ', this.props.path);
        return this.props.path === '' ? 
                <LogIn params = {this.props.params}/> : 
            this.props.path === 'home' ? 
                <Home params = {this.props.params}/> :
                <div>PAGE NOT FOUND</div>
    }
}

const mapStateToProp = (state) => {
    return {
        path: state.navigator.path,
        params: state.navigator.params
    }
}

export default connect(mapStateToProp)(App);