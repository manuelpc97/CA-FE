import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../Common/Card/Card";
import CardHeader from "../Common/Card/CardHeader";
import CardBody from "../Common/Card/CardBody";
import Button from "../Common/CustomButtons/Button.js";
import CustomInput from "../Common/CustomInput/CustomInput.js";
import { logIn, changePath } from '../../actions';



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isValidUsername: false,
            isValidPassword: false,
        }
    }

    render() {
        const { isValidUsername, isValidPassword } = this.state;
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
                                labelText="Usuario"
                                id="email-address"
                                error={isValidUsername}
                                inputProps={{
                                    value: this.state.username,
                                    onChange: this.onUsernameChange
                                }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputIcon={<i style={{ color: '#929292', fontSize: '15px', marginRight: '10px' }} className="fas fa-envelope"></i>}
                            />
                            {
                                isValidUsername ? <p style={{
                                    fontSize: '11px',
                                    color: 'red'
                                }}>Nombre de usuario invalido</p> : ''
                            }
                        </div>
                        <div className="form-group">
                            <CustomInput
                                labelText="Contraseña"
                                inputProps={{
                                    type: "password",
                                    value: this.state.password,
                                    onChange: this.onPasswordChange
                                }}
                                autoComplete="current-password"
                                id="password"
                                error={isValidPassword}
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputIcon={<i style={{ color: '#929292', fontSize: '15px', marginRight: '10px' }} className="fas fa-unlock"></i>}
                            />
                            {
                                isValidPassword ? <p style={{
                                    fontSize: '11px',
                                    color: 'red'
                                }}>Contraseña Invalida</p> : ''
                            }
                        </div>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                                className="custom-control-input"
                                id=" customCheckLogin"
                                type="checkbox"
                            />
                        </div>
                        <div className="text-center">
                            <Button disabled={(isValidUsername || isValidPassword)} className="my-2" color="primary" type="button" onClick={this.onSubmit}>
                                Iniciar Sesión
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        );
    }

    onUsernameChange = event => {
        const { value } = event.target
        const usernameRegex = /^[a-zA-Z0-9-!_]{5,}$/
        const isValid = usernameRegex.test(value)
        this.setState({
            username: value,
            isValidUsername: !isValid
        });
    }

    onPasswordChange = event => {
        const { value } = event.target;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        const isValid = passwordRegex.test(value)
        this.setState({ 
            password: event.target.value,
            isValidPassword: !isValid,
        });
    }

    onSubmit = async () => {
        await this.props.logIn(this.state.username, this.state.password);
        if (this.props.isAuth === true) {
            this.props.changePath('home');
        } else {
            this.setState({ username: '', password: '' });
        }
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.isAuth
    }
}

export default connect(mapStateToProps, { logIn, changePath })(Form);