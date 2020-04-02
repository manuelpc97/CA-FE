import React, { Component } from 'react';
import './Login.css';
import serviceLogin from '../../services/logIn';
import { Redirect } from "react-router-dom";
import Register from './Register/register'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameLogin: '',
            passwordLogin: '',
            isValidAuth: false
        }
    }

    handleLoginSubmit = (e) => {
        const { usernameLogin, passwordLogin } = this.state;
         e.preventDefault();

        serviceLogin({ username: usernameLogin, password: passwordLogin })
            .then(login => {
                sessionStorage.setItem('isAuth', true);
                console.log('login ----> ', login);
                this.setState({ isValidAuth: true })

            })
            .catch(error => {
                console.log('error----> ', error);
                sessionStorage.setItem('isAuth', false);
                this.setState({ isValidAuth: false })
            })

    }

    handleUsernameChange = (e) => {
        let newValue = e.target.value
        this.setState({ usernameLogin: newValue });
    }

    handlePasswordChange = (e) => {
        let newValue = e.target.value
        this.setState({ passwordLogin: newValue });
    }

    render() {

        let modalToRegister = (
            <Register />
        );

        const { isValidAuth } = this.state;

        if (isValidAuth === true) {
            return <Redirect from="/" to={{
                pathname: '/comparison'
                //pathname: '/home',
                //state: { isAlreadyAuth: isValidAuth }
            }} />
        }

        return (
            // <div style={{ backgroundImage: "linear-gradient(45deg, #aae620, #ff593f)" }}>
            <>
                {modalToRegister}
                < div >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div className="card my-5"
                                    style={{
                                        fontWeight: "200",
                                        fontSize: "1.5rem",
                                        padding: "2rem",
                                        border: "5px solid",
                                        borderImageSource: "linear-gradient(45deg, #aae620, #ff593f)",
                                        borderImageSlice: "1"
                                    }}
                                >
                                    <div className="card-body">
                                        <div style={{ textAlign: "center" }}>
                                            <img className="img-responsive" alt="SEGURÚ" src='images/login/insurance.png' />
                                            <h4 style={{
                                                fontFamily: "sans-serif",
                                                marginTop: "23px",
                                                paddingLeft: "9%",
                                                letterSpacing: "0.7em"
                                            }}
                                                className="card-title text-center">SEGURÚ</h4>
                                        </div>
                                        <form id="loginForm" onSubmit={this.handleLoginSubmit} action="/home">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="usernameLogin"
                                                    placeholder="Nombre de Usuario" onChange={this.handleUsernameChange}
                                                    style={{
                                                        borderRadius: "15px",
                                                        padding: "7%",
                                                        marginTop: "7%",
                                                    }} required />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="passwordLogin"
                                                    placeholder="Password" onChange={this.handlePasswordChange}
                                                    style={{
                                                        borderRadius: "15px",
                                                        padding: "7%",
                                                        marginTop: "7%",
                                                    }} required />
                                            </div>
                                            <button id="login-button" type="submit" className="btn btn-lg btn-primary btn-block text-uppercase"
                                                style={{
                                                    backgroundColor: '#ff593f',
                                                    border: 'none',
                                                    marginTop: '10%',
                                                    fontFamily: 'sans-serif'
                                                }}><b>Entrar</b></button>
                                        </form>
                                        <div style={{
                                            textAlign: "center",
                                            marginTop: "5%",
                                        }}>
                                            <a
                                                href="/"
                                                type="button"
                                                data-toggle="modal"
                                                data-target="#modalToRegister"
                                            // style={{ color: "#000000" }}
                                            >
                                                <p style={{
                                                    fontSize: "0.5em",
                                                    fontFamily: "sans-serif",
                                                }}><b>¿Aún no tienes cuenta? Regístrate en Segurú</b></p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </>
        )
    }
}

export default Login;