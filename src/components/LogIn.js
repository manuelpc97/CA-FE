import React, {Component} from 'react'
import {connect} from 'react-redux';

import {changePath, logIn,createUser,promptError} from '../actions';

class LogIn extends Component{
    componentDidMount(){
        console.log('MY PROPS: ', this.props.params);
        this.props.logIn('holis', 'holis123');
    }

    render(){
        console.log('ERROR MESSAGE: ', this.props.errorMessage);
        return <div>
            <h1>LOGIN</h1>
            <button onClick = {this.handleClick}>LLEVAME A HOME</button>
        </div>
    }

    handleClick = () =>{
        this.props.changePath('home', {param1: 'SOY UN PARAMETRO'});
    }

    async register(){
        /*const user = {
            username: 'manuel', 
            password: 'manuel123', 
            firstName: 'Manuel', 
            lastName: 'padilla', 
            phone: '12345671', 
            email: "manuel@gmail.com", 
            id: '0801-1996-07844'
        }
        const response = await createUser(user).catch(error => promptError(error));
        console.log('MY RESPONSE: ', response)*/
    }
}

const mapStateToProp = state => {
    return {
        currentUser: state.user.currentUser,
        isAuth: state.user.isAuth, 
        error: state.error.error, 
        errorMessage: state.error.message
    };
}

export default connect(mapStateToProp,{changePath,logIn})(LogIn);