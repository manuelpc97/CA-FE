import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthNavbar from './AuthNavbar';

class Header extends Component {
    render() {
        return (
            <>
                <div className="header bg-gradient-info py-7 py-lg-8">
                    {/* AUTH Navbar */}
                    <AuthNavbar />
                    <div className="container">
                        <div className="header-body text-center mb-7">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-6">
                                    <h1 className="text-white" style={{ }}>¡Bienvenido!</h1>
                                    <p className="text-lead text-light" style={{ fontSize: '20px' }}>
                                        Las <b style={{ fontWeight: "bold" }}>más amplias</b> coberturas y beneficios de seguros,
                                        <b style={{ fontWeight: "bold" }}> mejor</b> precio del mercado
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-default"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProp = state => {
    return {
        // currentUser: state.user.currentUser,
        // isAuth: state.user.isAuth,
        // error: state.error.error,
        // errorMessage: state.error.message
    };
}

export default connect(mapStateToProp, {})(Header)