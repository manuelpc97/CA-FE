import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../Common/Card/Card";
import CardHeader from "../Common/Card/CardHeader";
import CardBody from "../Common/Card/CardBody";
import Button from "../Common/CustomButtons/Button.js";
import CustomInput from "../Common/CustomInput/CustomInput.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

class Form extends Component {
    render() {
        return (
            <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-transparent">
                    <div className="btn-wrapper text-center">

                        <span className="btn-inner--icon">
                            <img
                                alt="..."
                                src="/images/login/loginIcon.jpg"
                                width='70%'
                            />
                        </span>
                    </div>
                </CardHeader>
                <CardBody className="px-lg-5 pb-lg-5">
                    <div className="text-center text-muted mb-4">
                    </div>
                    <form>
                        <div className="form-group">
                            <CustomInput
                                labelText="Correo Electrónico"
                                id="email-address"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputIcon={<i style={{ color: '#929292', fontSize: '15px', marginRight: '10px' }} className="fas fa-envelope"></i>}
                            />
                        </div>
                        <div className="form-group">
                            <CustomInput
                                labelText="Contraseña"
                                inputProps={{
                                    type: "password"
                                }}
                                autoComplete="current-password"
                                id="password"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputIcon={<i style={{ color: '#929292', fontSize: '15px', marginRight: '10px' }} className="fas fa-unlock"></i>}
                            />
                        </div>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                                className="custom-control-input"
                                id=" customCheckLogin"
                                type="checkbox"
                            />
                        </div>
                        <div className="text-center">
                            <Button className="my-2" color="primary" type="button">
                                Iniciar Sesión
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        );
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

export default connect(mapStateToProp, {})(Form)