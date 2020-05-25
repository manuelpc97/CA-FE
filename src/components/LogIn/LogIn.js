import React, { Component } from 'react'
import Header from './Header';
import Form from './Form';

class LogIn extends Component {
    componentWillUnmount() {
        document.body.classList.remove("bg-default");
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
                                    <a href="#">
                                        <small>Crear una cuenta</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) 
    }
}



export default LogIn