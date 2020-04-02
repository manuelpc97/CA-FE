import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAlreadyAuth: false
        }
    }

    componentDidMount() {
        const isAlreadyAuth = sessionStorage.getItem('isAuth');
        this.setState({ isAlreadyAuth });
    }

    render() {
        const { isAlreadyAuth } = this.state;
        if (isAlreadyAuth) {
            return (
                <nav className="navbar navbar-default fixed-top" style={{ backgroundColor: "rgb(247, 232, 229)" }}>
                    <div class="container">
                        <a class="navbar-brand" href="/home" style={{
                            fontFamily: "sans-serif",
                            letterSpacing: "0.7em",
                            color: "black"
                        }}>SEGURÚ</a>
                        <button class="btn" type="submit" style={{
                            color: "#ff593f",
                            borderColor: "#ff593f",
                            fontFamily: "sans-serif"
                        }}>Salir</button>
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