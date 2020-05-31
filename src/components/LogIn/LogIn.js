import '../../styles/Login.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Form from './Form';
import { singUp, changePath } from '../../actions';

class LogIn extends Component {
    componentWillUnmount() {
        document.body.classList.remove("bg-default");
    }

    onClickCreateAccount = () => {
        this.props.changePath('singup');
    }
    render() {

        return (
            <>
                <div className="main-content">
                    <Header />
                    <div className='container pb-5' style={{ marginTop: '-10rem' }}>
                        <div className='row justify-content-center'>
                            <div className="col-md-7 col-lg-5">
                                <Form />
                                <div className="col-xs-6 text-right">
                                    <small className={'createAccount'} onClick={this.onClickCreateAccount}>
                                        Regístrate en SEGURÚ
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        // isAuth: state.user.isAuth
    }
}

export default connect(mapStateToProps, { singUp, changePath })(LogIn)