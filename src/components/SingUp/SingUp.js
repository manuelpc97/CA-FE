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
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            documentId: '',
            email: '',
            cellphone: '',
            isfirstNameWrong: false,
            islastNameWrong: false,
            isdocumentIdWrong: false,
            isemailWrong: false,
            iscellphoneWrong: false,
            isusernameWrong: false,
            ispasswordWrong: false,
            isValidData: false,
        }
    }

    getInputValues = (event) => {
        const { id, value } = event.target;
        this.setState({
            [id]: value,
            [`is${event.target.id}Wrong`]: this.validateInputs(id, value),
        });
        this.disableSaveButton();
    }

    disableSaveButton = () => {
        const { isfirstNameWrong,
            islastNameWrong,
            isdocumentIdWrong,
            isemailWrong,
            iscellphoneWrong,
            isusernameWrong,
            ispasswordWrong, } = this.state

        const isValid = [isfirstNameWrong,
            islastNameWrong,
            isdocumentIdWrong,
            isemailWrong,
            iscellphoneWrong,
            isusernameWrong,
            ispasswordWrong].includes(true);

        this.setState({ isValidData: !isValid })

    }
    validateInputs = (inputId, value) => {
        let isValid = false;
        switch (inputId) {
            case 'firstName':
                isValid = (/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/).test(value)
                break;
            case 'lastName':
                isValid = (/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/).test(value)
                break;
            case 'documentId':
                isValid = (/^\(?([0-9]{4})\)?[-]?([0-9]{4})[-]?([0-9]{5})$/).test(value)
                break;
            case 'email':
                isValid = (/\S+@\S+\.\S+/).test(value)
                break;
            case 'cellphone':
                isValid = (/^\(?([0-9]{8})\)?$/).test(value)
                break;
            case 'username':
                isValid = (/^[a-zA-Z0-9-!_]{5,}$/).test(value)
                break;
            case 'password':
                isValid = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/).test(value)
                break;
            default:
                console.log('input id is not supported');
                break;
        }
        return !isValid;
    }

    createUser = async () => {
        const {
            firstName,
            lastName,
            documentId,
            email,
            cellphone,
            username,
            password,
        } = this.state
        const response = await this.props.singUp({
            firstName,
            lastName,
            id: documentId,
            email,
            phone: cellphone,
            username,
            password,
        });
        console.log('response', response);
    }
    returnToLogin = () => {
        this.props.changePath('');
    }

    render() {
        const {
            username,
            password,
            firstName,
            lastName,
            documentId,
            email,
            cellphone,
            isfirstNameWrong,
            islastNameWrong,
            isdocumentIdWrong,
            isemailWrong,
            iscellphoneWrong,
            isusernameWrong,
            ispasswordWrong,
            isValidData
        } = this.state;
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
                                        error={isfirstNameWrong}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            value: firstName,
                                            onChange: this.getInputValues
                                        }}
                                    />
                                    {
                                        isfirstNameWrong ? <p style={{
                                            fontSize: '11px',
                                            color: 'red'
                                        }}>Nombre invalido. Solo se permiten letras</p> : ''
                                    }
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Apellido"
                                        id="lastName"
                                        error={islastNameWrong}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            value: lastName,
                                            onChange: this.getInputValues
                                        }}
                                    />
                                    {
                                        islastNameWrong ? <p style={{
                                            fontSize: '11px',
                                            color: 'red'
                                        }}>Apellido invalido. Solo se permiten letras</p> : ''
                                    }
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Identidad"
                                        id="documentId"
                                        error={isdocumentIdWrong}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            value: documentId,
                                            onChange: this.getInputValues
                                        }}
                                    />
                                    {
                                        isdocumentIdWrong ? <p style={{
                                            fontSize: '11px',
                                            color: 'red'
                                        }}>Número de Identidad Invalido. Usar guiones</p> : ''
                                    }
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Correo Electrónico"
                                        id="email"
                                        error={isemailWrong}
                                        formControlProps={{
                                            fullWidth: true,
                                            type: "email",
                                        }}
                                        inputProps={{
                                            value: email,
                                            onChange: this.getInputValues
                                        }}
                                    />
                                    {
                                        isemailWrong ? <p style={{
                                            fontSize: '11px',
                                            color: 'red'
                                        }}>Correo Electrónico invalido.</p> : ''
                                    }
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Celular"
                                        id="cellphone"
                                        error={iscellphoneWrong}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            value: cellphone,
                                            onChange: this.getInputValues
                                        }}
                                    />
                                    {
                                        iscellphoneWrong ? <p style={{
                                            fontSize: '11px',
                                            color: 'red'
                                        }}>Número de celular invalido.</p> : ''
                                    }
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Nombre de Usuario"
                                        id="username"
                                        error={isusernameWrong}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            value: username,
                                            onChange: this.getInputValues
                                        }}
                                    />
                                    {
                                        isusernameWrong ? <p style={{
                                            fontSize: '11px',
                                            color: 'red'
                                        }}>Nombre de usuario invalido. Usar al menos cinco caracteres</p> : ''
                                    }
                                </div>
                                <div className="row col-xs-12 col-sm-12 col-md-12">
                                    <CustomInput
                                        labelText="Contraseña"
                                        id="password"
                                        isValid={ispasswordWrong}
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: password,
                                            onChange: this.getInputValues,
                                            type: "password",
                                        }}
                                    />
                                    {
                                        ispasswordWrong ? <p style={{
                                            fontSize: '11px',
                                            color: 'red'
                                        }}>Contraseña invalida. Usar al menos 8 caracteres, una letra mayúscula y un número</p> : ''
                                    }
                                </div>
                            </div>
                        </CardBody>
                        <div className="submitButton">
                            <Button disabled={!isValidData} color="primary" type="button" onClick={this.createUser}>
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