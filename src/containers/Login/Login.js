import React, { Component } from 'react';
import './Login.css';
import serviceLogin from '../../services/logIn';
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isValidAuth: false
        }
    }

    handleLoginSubmit = (e) => {
        const { username, password } = this.state;
        e.preventDefault();

        serviceLogin({ username, password })
            .then(login => {
                sessionStorage.setItem('isAuth', true);
                console.log('login ----> ', login);
                this.setState({ isValidAuth: true })
            })
            .catch(error => {
                console.log('error----> ', error);
            })

    }

    handleUsernameChange = (e) => {
        let newValue = e.target.value
        this.setState({ username: newValue });
    }

    handlePasswordChange = (e) => {
        let newValue = e.target.value
        this.setState({ password: newValue });
    }

    render() {
        const { isValidAuth } = this.state;

        if (isValidAuth === true) {
            return <Redirect from="/" to="home" />
        }
        return (
            <div>
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
                                    <form id="loginForm" onSubmit={this.handleLoginSubmit}>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="username"
                                                placeholder="Nombre de Usuario" onChange={this.handleUsernameChange}
                                                style={{
                                                    borderRadius: "15px",
                                                    padding: "7%",
                                                    // border: "2px solid rgba(255, 89, 63, 0.4)",
                                                    marginTop: "7%",
                                                }} required />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" id="password"
                                                placeholder="Password" onChange={this.handlePasswordChange}
                                                style={{
                                                    borderRadius: "15px",
                                                    padding: "7%",
                                                    // border: "2px solid rgba(255, 89, 63, 0.4)",
                                                    marginTop: "7%",
                                                }} required />
                                        </div>
                                        <button type="submit" class="btn btn-lg btn-primary btn-block text-uppercase"
                                            style={{
                                                backgroundColor: '#ff593f',
                                                border: 'none',
                                                marginTop: '15%',
                                                fontFamily: 'sans-serif'
                                            }}><b>Entrar</b></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;