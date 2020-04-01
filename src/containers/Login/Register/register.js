import React, { Component } from "react";
import UserService from '../../../services/user';
import { NotificationManager } from 'react-notifications';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            id: '',
            email: '',
            phone: ''
        }
        this.userService = new UserService();
    }
    getInputValues = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    saveUser = (event) => {
        // event.preventDefault();
        const {
            username,
            password,
            firstname, 
            lastname, 
            id,
            email, 
            phone
        } = this.state

        const body = {
            username,
            password, 
            firstname, 
            lastname,
            id,
            email, 
            phone
        }

        this.userService.createUser(body)
        .then( response => {
            console.log('response ---> ', response)
            NotificationManager.success("Tu cuenta fue creado con éxito", `Bienvendio ${firstname}`);
        })
        .catch( error => {
            console.log('error ---> ', error);
            NotificationManager.success("Por favor intenta más tarde", "Hubo un error al crear tu cuenta");
        })
    }
    render() {
        return (
            <div className="modal" id="modalToRegister" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">

                            <div style={{
                                marginTop: "3%",
                                marginLeft: "24%"
                            }}>
                                <img className="img-responsive"
                                    alt="SEGURÚ" src='images/register.png'
                                    style={{
                                        width: "64px",
                                        verticalAlign: "middle",
                                        display: "inline-block"
                                    }} />
                                <p style={{
                                    fontFamily: "sans-serif",
                                    verticalAlign: "middle",
                                    display: "inline-block",
                                    fontSize: "25px",
                                    margin: "15px"
                                }}><b>Crea tu cuenta</b></p>
                            </div>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="registerForm" onSubmit={this.saveUser}>
                                <div class="form-group">
                                    <label>Nombre de Usuario</label>
                                    <input type="text" class="form-control" id="username" onChange={this.getInputValues} required />
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" id="password" onChange={this.getInputValues} required />
                                </div>
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" id="firstname" onChange={this.getInputValues} required />
                                </div>
                                <div class="form-group">
                                    <label>Apellido</label>
                                    <input type="text" class="form-control" id="lastname" onChange={this.getInputValues} required />
                                </div>
                                <div class="form-group">
                                    <label>Número de Identidad</label>
                                    <input type="tel" id="id"
                                        class="form-control"
                                        pattern="[0-9]{4}-[0-9]{4}-[0-9]{5}"
                                        placeholder="0000-0000-00000"
                                        onChange={this.getInputValues}
                                        required />
                                </div>
                                <div class="form-group">
                                    <label>Correo Electrónico</label>
                                    <input type="email" class="form-control" id="email" onChange={this.getInputValues} required />
                                </div>
                                <div class="form-group">
                                    <label>Teléfono</label>
                                    <input type="tel" id="phone"
                                        class="form-control"
                                        pattern="[0-9]{4}-[0-9]{4}"
                                        placeholder="0000-0000"
                                        onChange={this.getInputValues}
                                        required />
                                </div>

                                <button type="submit" className="btn btn-primary" style={{
                                    backgroundColor: '#ff593f',
                                    border: 'none',
                                    marginLeft: '81%',
                                    marginTop: '5%',
                                    fontFamily: 'sans-serif'
                                }}>Guardar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register