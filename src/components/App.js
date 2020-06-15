import React, { Component } from 'react';
import {connect} from 'react-redux'
import {cleanError, cleanNotification} from './../actions';

import LogIn from './LogIn/LogIn';
import Home from './Home';
import SingUp from './SingUp/SingUp';
import Notifications from './Notifications';

class App extends Component { 
    componentDidMount(){
    }

    render() {
        return <div>
            {this.props.path === '' ? 
                <LogIn params = {this.props.params}/>: 
            this.props.path === 'home' ? 
                <Home params = {this.props.params}/> :
            this.props.path === 'singup' ?
                <SingUp/> :
                <div>PAGE NOT FOUND</div>}
            <Notifications 
                open = {this.props.error} 
                message = {this.props.errorMessage} 
                handleClose = {this.onErrorClose}
                type = {this.props.errorType}
            />
            <Notifications 
                open = {this.props.notification} 
                message = {this.props.notificationMessage} 
                handleClose = {this.onNotificationClose}
                type = {this.props.notificationType}
            />
        </div>
         
    }

    onNotificationClose = () => {
        this.props.cleanNotification();
    }

    onErrorClose = () => {
        this.props.cleanError();
    }
}

const mapStateToProp = (state) => {
    return {
        path: state.navigator.path,
        params: state.navigator.params, 
        error: state.error.error,
        errorMessage: state.error.message,
        errorType: state.error.type,
        notification: state.notification.notification,
        notificationMessage: state.notification.message,
        notificationType: state.notification.type
    }
}

export default connect(mapStateToProp, {cleanError, cleanNotification})(App);