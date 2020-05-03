import React, {Component} from 'react'
import {connect} from 'react-redux';

import {changePath, createUser} from '../actions';

class LogIn extends Component{
    async componentDidMount(){
        console.log('MY PROPS: ', this.props.params);
        const user = {
            username: 'manuel', 
            password: 'manuel123', 
            firstName: 'Manuel', 
            lastName: 'padilla', 
            phone: '12345671', 
            email: "manuel@gmail.com", 
            id: '0801-1996-07844'
        }
        console.log('BEFORE RESPONSE');
        const response = await createUser(user);
        console.log('MY RESPONSE: ', response)
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