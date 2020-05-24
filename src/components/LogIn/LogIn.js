import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import Form from './Form';
import { changePath, logIn, createUser, promptError } from '../../actions';

class LogIn extends Component {
    componentDidMount() {
        console.log('MY PROPS: ', this.props.params);
        this.props.logIn('holis', 'holis123');
        document.body.classList.add("bg-default");
    }

    componentWillUnmount() {
        document.body.classList.remove("bg-default");
    }

    render() {
        console.log('ERROR MESSAGE: ', this.props.errorMessage);

        return (
            <>
                <div className="main-content">
                    <Header />
                    <div className='container pb-5' style={{ marginTop: '-10rem' }}>
                        <div className='row justify-content-center'>
                            <div className="col-md-9 col-lg-7">
                                <Form />
                                <div className="col-xs-6 text-right">
                                    <a href="#">
                                        Crear una cuenta
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    handleClick = () => {
        this.props.changePath('home', { param1: 'SOY UN PARAMETRO' });
    }

    async register() {
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

export default connect(mapStateToProp, { changePath, logIn })(LogIn);