import React, {Component} from 'react'
import {connect} from 'react-redux';

import {changePath} from '../actions';

class LogIn extends Component{
    handleClick = () =>{
        this.props.changePath('home');
    }

    render(){
        return <div>
            <h1>LOGIN</h1>
            <button onClick = {this.handleClick}>LLEVAME A HOME</button>
        </div>
    }
}

const mapStateToProp = state => {
    return {
        currentUser: state.user.currentUser,
        isAuth: state.user.isAuth
    };
}

export default connect(mapStateToProp,{changePath})(LogIn);