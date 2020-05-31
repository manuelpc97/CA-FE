import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/SingUp.css';
import Card from "../Common/Card/Card";
import CardHeader from "../Common/Card/CardHeader";
import CardBody from "../Common/Card/CardBody";
import Button from "../Common/CustomButtons/Button.js";
import CustomInput from "../Common/CustomInput/CustomInput.js";
import { singUp, changePath } from '../../actions';

class SingUp extends Component {
    returnToLogin = () => {
        this.props.changePath('');
    }

    render() {

        return (
            <div>
                <nav className="navbar navbar-light" style={{ background: 'linear-gradient(87deg, #e72339 0, #ff9800 100%)' }}>
                    <h1 style={{
                        color: 'white',
                        letterSpacing: 30,
                        cursor: 'pointer',
                    }}
                        onClick={this.returnToLogin}
                    >SEGURÚ</h1>
                </nav>
                <div className={'cardForm'}>
                    <Card>
                        <CardHeader color="warning">
                            <h4>Crea tu cuenta</h4>
                            <p>Completa el siguiente formulario</p>
                        </CardHeader>
                        <CardBody>
                            <div className="container">
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Nombre"
                                        id="firstName"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Apellido"
                                        id="lastName"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Identidad"
                                        id="documentId"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Correo Electrónico"
                                        id="email"
                                        formControlProps={{
                                            fullWidth: true,
                                            type: "email",
                                        }}
                                    />
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Celular"
                                        id="celphone"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Nombre de Usuario"
                                        id="username"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Contraseña"
                                        id="password"
                                        formControlProps={{
                                            fullWidth: true,
                                            type: "password",
                                        }}
                                    />
                                </div>
                            </div>
                        </CardBody>
                        <div className="submitButton">
                            <Button color="primary" type="button">
                                Crear Usuario
                        </Button>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // isAuth: state.user.isAuth
    }
}

export default connect(mapStateToProps, { singUp, changePath })(SingUp)