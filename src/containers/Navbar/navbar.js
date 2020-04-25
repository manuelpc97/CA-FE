import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAlreadyAuth: false
        }
    }

    componentDidMount() {
        // const isAlreadyAuth = localStorage.getItem('isAuth');
        // const isAlreadyBool = isAlreadyAuth === "true" ? true : false;
        // this.setState({ isAlreadyAuth: isAlreadyBool });
    }

    handlerLogOut = () => {
        this.props.logOut();
        return <Redirect to="/" />;
    }

    render() {
        const { isAlreadyAuth } = this.props;
        if (isAlreadyAuth || localStorage.getItem('isAuth')) {
            return (
                <nav className="navbar navbar-default fixed-top" style={{ backgroundColor: "rgb(247, 232, 229)" }}>
                    <div class="container">
                        <a class="navbar-brand" href="/home" style={{
                            fontFamily: "sans-serif",
                            letterSpacing: "0.7em",
                            color: "black"
                        }}>SEGURÚ</a>
                        <button class="btn btn-primary text-uppercase" style={{
                            // color: "#ff593f",
                            // borderColor: "#ff593f",
                            fontFamily: "sans-serif",
                            background: "linear-gradient(45deg, #eaae82, #ff593f)",
                            border: "0px",
                            width: "11%"
                        }} onClick={this.handlerLogOut}><b>Salir</b></button>
                        {/* 
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                                                style={{
                                                    backgroundColor: '#ff593f',
                                                    border: 'none',
                                                    marginTop: '10%',
                                                    fontFamily: 'sans-serif'
                                                }} */}
                    </div>
                </nav >
            )
        }

        return (
            <div></div>
        )
    }
}

export default Navbar;