import React, {Component} from 'react'
import {connect} from 'react-redux';

import {changePath} from '../actions';

class LogIn extends Component{
    componentDidMount(){
        console.log('MY PROPS: ', this.props.params);
    }

    render(){
        return <div>
            <h1>LOGIN</h1>
            <button onClick = {this.handleClick}>LLEVAME A HOME</button>
        </div>
    }

    handleClick = () =>{
        this.props.changePath('home', {param1: 'SOY UN PARAMETRO'});
    }
}

const mapStateToProp = state => {
    return {
        currentUser: state.user.currentUser,
        isAuth: state.user.isAuth
    };
}

export default connect(mapStateToProp,{changePath})(LogIn);