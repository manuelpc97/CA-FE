import React, { Component } from 'react';
import {connect} from 'react-redux'
import {cleanError} from './../actions';

import LogIn from './LogIn/LogIn';
import Home from './Home';
import SingUp from './SingUp/SingUp';
import Notifications from './Notifications';
import Form from './Form/Form';

import myForm from './../assets/forms/form';

class App extends Component { 
    componentDidMount(){
        
    }

    render() {
        return <div>
            {this.props.path === '' ? 
                <Form  form = {myForm} parentForm={true}/>
                /*<LogIn params = {this.props.params}/>*/: 
            this.props.path === 'home' ? 
                <Home params = {this.props.params}/> :
            this.props.path === 'singup' ?
                <SingUp/> :
                <div>PAGE NOT FOUND</div>}
            <Notifications 
                open = {this.props.error} 
                message = {this.props.errorMessage} 
                handleClose = {this.onNotificationClose}
            />
        </div>
         
    }

    onNotificationClose = () => {
        this.props.cleanError();
    }
}

const mapStateToProp = (state) => {
    return {
        path: state.navigator.path,
        params: state.navigator.params, 
        error: state.error.error,
        errorMessage: state.error.message
    }
}

export default connect(mapStateToProp, {cleanError})(App);