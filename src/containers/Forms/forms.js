import React, { Component } from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';
import { throwStatement } from "@babel/types";

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 2,
            name: '',
            id: '',
            email: '',
            phone: '',
            address: '',
            alreadyHasInsurance: false,
            insuranceCompanyName: '',
            expirationDate: null,
            statusOfCar: null,
            kindOfCar: null,
            notSure: null,
            brandCar: null,
            modelCar: null,
            enableNextButton: {
                1: false,
                2: false,
                3: false,
            }
        }
    }

    handleDayChange = (day) => {
        this.setState({ expirationDate: day });
    }

    getInputValues = (event) => {
        const { currentStep } = this.state;
        console.log('---> ', event.target.id);
        console.log('--->', event.target.value);
        this.setState({
            [event.target.id]: event.target.value
        })

        if (currentStep === 1) {
            this.validateFirstValues();
        }
    }
    
    getInputChecked = (event) => {
        this.setState({
            [event.target.id]: event.target.checked
        })

        console.log('---> ', event.target.id);
        console.log('--->', event.target.checked);
    }

    getRadioValues = (event) => {
        console.log('---> ', event.target.name);
        console.log('--->', event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    validateFirstValues = () => {
        const { name, id, email, phone, address, enableNextButton } = this.state;
        if (!!(name) && !!(id) && !!(email) &&
            !!(phone) && !!(address)) {
            enableNextButton[1] = true
            this.setState({
                enableNextButton: enableNextButton
            })
        } else {
            enableNextButton[1] = false
            this.setState({
                enableNextButton: enableNextButton
            })
        }
    }

    validateSecondValues = () => {
        const { alreadyHasInsurance, statusOfCar, kindOfCar, brandCar, modelCar, enableNextButton } = this.state;
        if (!!(alreadyHasInsurance) && !!(statusOfCar) && !!(kindOfCar) &&
            !!(brandCar) && !!(modelCar)) {
            enableNextButton[2] = true
            this.setState({
                enableNextButton: enableNextButton
            })
        } else {
            enableNextButton[2] = false
            this.setState({
                enableNextButton: enableNextButton
            })
        }
    }

    getRadioBtnValue = (event) => {
        const radioBtnSelected = event.target.id
        if (radioBtnSelected.indexOf("not") !== -1) {
            this.setState({ alreadyHasInsurance: false })
        } else {
            this.setState({ alreadyHasInsurance: true })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { email, username, password } = this.state
    }

    next = () => {
        let { currentStep } = this.state;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    /*
    * the functions for our button
    */
    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this.prev}>
                    Anterior
      </button>
            )
        }
        return null;
    }

    nextButton() {
        // let currentStep = this.state.currentStep;
        let { currentStep, enableNextButton } = this.state;
        console.log('enableNextButton --->', enableNextButton)
        // const isEnabled = !enableNextButton[currentStep] ? "disabled" : "";
        if (currentStep < 3) {
            if (!enableNextButton[currentStep]) {
                return (
                    <button
                        className="btn btn-primary float-right"
                        type="button"
                        onClick={this.next}
                        disabled>
                        Siguiente
                    </button>
                )
            }

            return (
                <button
                    className="btn btn-primary float-right"
                    type="button"
                    onClick={this.next}>
                    Siguiente
                </button>
            )
        }
        return (null)
    }

    render() {
        const {
            name,
            id,
            email,
            phone,
            address,
            alreadyHasInsurance,
            expirationDate,
            brandCar,
            modelCar
        } = this.state;
        return (
            <>
                <div style={{
                    textAlign: "center",
                    marginBottom: "3%",
                    fontFamily: "sans-serif",
                    fontSize: "16px",

                }}>
                    <h4><strong>Solicitud de Información</strong></h4>
                    <br />
                    <p>
                        Ayúdenos a responder un breve cuestionario para brindarle gratuitamente toda la información acerca de las ofertas de seguro de vehículo disponibles en el mercado.
                    </p>
                </div>
                <div className="container" style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                }}>
                    <div className="row">
                        <div className="col-sm-2" style={{
                            display: "block",
                            margin: "auto"
                        }}>
                            <img src="/images/paper.png" alt="SEGURÚ" style={{
                            }} />
                        </div>
                        <div className="col-sm-8" style={{ marginLeft: "16%" }}>
                            <form onSubmit={this.handleSubmit}>
                                <FirstPart
                                    currentStep={this.state.currentStep}
                                    handleChange={this.getInputValues}
                                    name={name}
                                    id={id}
                                    phone={phone}
                                    email={email}
                                    address={address}
                                />

                                <SecondPart
                                    currentStep={this.state.currentStep}
                                    getRadioBtnValue={this.getRadioBtnValue}
                                    name={name}
                                    id={id}
                                    phone={phone}
                                    email={email}
                                    address={address}
                                    selectedDay={expirationDate}
                                    alreadyHasInsurance={alreadyHasInsurance}
                                    handleDayChange={this.handleDayChange}
                                    handleChange={this.getInputValues}
                                    getRadioValues={this.getRadioValues}
                                    brandCar={brandCar}
                                    modelCar={modelCar}
                                    getInputChecked={this.getInputChecked}
                                />

                                <ThirdPart
                                    currentStep={this.state.currentStep}
                                />
                                {this.previousButton()}
                                {this.nextButton()}

                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function FirstPart(props) {
    if (props.currentStep !== 1) {
        return null
    }
    const { name, id, email, phone, address, handleChange } = props;
    return (
        <>
            <div className="form-group">
                <label>Nombre y Apellido</label>
                <input value={name} type="text" className="form-control" id="name" onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Número de Identidad</label>
                <input value={id} type="tel" id="id"
                    className="form-control"
                    pattern="[0-9]{4}-[0-9]{4}-[0-9]{5}"
                    placeholder="Número de Identidad/Pasaporte/Tarjeta de Residencia"
                    onChange={handleChange}
                    required />
            </div>
            <div className="form-group">
                <label>Correo Electrónico</label>
                <input value={email} type="email" className="form-control" id="email" onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Teléfono</label>
                <input value={phone} type="tel" id="phone"
                    className="form-control"
                    pattern="[0-9]{4}-[0-9]{4}"
                    placeholder="0000-0000"
                    onChange={handleChange}
                    required />
            </div>
            <div className="form-group">
                <label>Ciudad de Residencia</label>
                <input value={address} type="text" className="form-control" id="address" onChange={handleChange} required />
            </div>
        </>

    );
}

function SecondPart(props) {
    if (props.currentStep !== 2) {
        return null
    }
    const {
        name,
        id,
        email,
        phone,
        address,
        getRadioBtnValue,
        alreadyHasInsurance,
        insuranceCompanyName,
        selectedDay,
        handleChange,
        handleDayChange,
        getRadioValues,
        getInputChecked,
        brandCar,
        modelCar
    } = props;
    return (
        <>
            <div className="form-group">
                <label>¿Tiene actualmente una póliza de seguro de vehículo vigente?</label>
                <br />
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="hasInsurance"
                        class="custom-control-input"
                        name="alreadyhasInsurance"
                        onChange={getRadioBtnValue} />
                    <label class="custom-control-label" for="hasInsurance">Si</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="notHasInsurance"
                        class="custom-control-input"
                        name="alreadyhasInsurance"
                        onChange={getRadioBtnValue} />
                    <label class="custom-control-label" for="notHasInsurance">No</label>
                </div>
                {alreadyHasInsurance ?
                    (
                        <>
                            <div className="form-group">
                                <label>¿Con cuál compañía de seguros?</label>
                                <select id="insuranceCompanyName" value={insuranceCompanyName} onChange={handleChange} class="custom-select custom-select-sm">
                                    <option value="Seguro Atlántida">Seguro Atlántida</option>
                                    <option value="Ficohsa Seguros">Ficohsa Seguros</option>
                                    <option value="Mapfre Seguros">Mapfre Seguros</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>¿Cuándo se vence la póliza? </label>
                                <br />
                                <DayPickerInput
                                    placeholder="Selecciona una fecha"
                                    format="LL"
                                    formatDate={formatDate}
                                    parseDate={parseDate}
                                    onDayChange={handleDayChange}
                                    inputProps={{
                                        style: {
                                            display: "block",
                                            width: "100%",
                                            height: "calc(1.5em + .75rem + 2px)",
                                            padding: ".375rem .75rem",
                                            fontSize: "1rem",
                                            fontWeight: "400",
                                            lineHeight: "1.5",
                                            color: "#495057",
                                            backgroundColor: "#fff",
                                            backgroundClip: "padding-box",
                                            border: "1px solid #ced4da",
                                            borderRadius: ".25rem",
                                            transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out,"
                                        }
                                    }}
                                    dayPickerProps={{
                                        locale: 'es',
                                        months: [
                                            'Enero',
                                            'Febrero',
                                            'Marzo',
                                            'Abril',
                                            'Mayo',
                                            'Junio',
                                            'Julio',
                                            'Agosto',
                                            'Septiembre',
                                            'Octubre',
                                            'Noviembre',
                                            'Diciembre'
                                        ],
                                        weekdaysLong: [
                                            'Domingo',
                                            'Lunes',
                                            'Martes',
                                            'Miercoles',
                                            'Jueves',
                                            'Viernes',
                                            'Sabado'
                                        ],
                                        weekdaysShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
                                    }}
                                />
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="notSure" onChange={getInputChecked}/>
                                    <label class="custom-control-label" for="notSure">No estoy seguro</label>
                                </div>
                            </div>
                        </>
                    )
                    : ""}

            </div>
            <div className="form-group">
                <label>Estado del Vehículo</label>
                <br />
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="nuevoAgencia"
                        value="nuevoAgencia"
                        class="custom-control-input"
                        name="statusOfCar"
                        onChange={getRadioValues}
                    />
                    <label class="custom-control-label" for="nuevoAgencia">Nuevo de Agencia</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="usadoAgencia"
                        value="usadoAgencia"
                        class="custom-control-input"
                        name="statusOfCar"
                        onChange={getRadioValues}
                    />
                    <label class="custom-control-label" for="usadoAgencia">Usado de Agencia</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="importado"
                        value="importado"
                        class="custom-control-input"
                        name="statusOfCar"
                        onChange={getRadioValues}
                    />
                    <label class="custom-control-label" for="importado">Usado Importado</label>
                </div>
            </div>
            <div className="form-group">
                <label>Tipo de vehículo</label>
                <br />
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="turismo"
                        value="Turismo"
                        class="custom-control-input"
                        name="kindOfCar"
                        onChange={getRadioValues}
                    />
                    <label class="custom-control-label" for="turismo">Turismo</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="pickup"
                        value="pickup"
                        class="custom-control-input"
                        name="kindOfCar"
                        onChange={getRadioValues}
                    />
                    <label class="custom-control-label" for="pickup">Pick Up</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="camioneta"
                        value="camioneta/suv"
                        class="custom-control-input"
                        name="kindOfCar"
                        onChange={getRadioValues}
                    />
                    <label class="custom-control-label" for="camioneta">Camionea/SUV</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="camion"
                        value="camion"
                        class="custom-control-input"
                        name="kindOfCar"
                        onChange={getRadioValues}
                    />
                    <label class="custom-control-label" for="camion">Camion</label>
                </div>
            </div>
            <div className="form-group">
                <label>Marca del Vehículo</label>
                <select class="custom-select custom-select-sm" id="brandCar" value={brandCar} onChange={handleChange}>
                    <option selected>Selecciona una opción</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Honda">Honda</option>
                </select>
            </div>
            <div className="form-group">
                <label>Modelo de Vehículo</label>
                <select class="custom-select custom-select-sm" id="modelCar" value={modelCar} onChange={handleChange}>
                    <option selected>Selecciona una opción</option>
                    <option value="modelo1">Modelo 1</option>
                    <option value="modelo2">Modelo 2</option>
                    <option value="modelo3">Modelo 3</option>
                </select>
            </div>
        </>

    );
}


function ThirdPart(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <>
            <div className="form-group">
                <label>Año del Vehículo</label>
                <input
                    // value={address} 
                    type="number"
                    className="form-control"
                    id="year"
                    min="1970"
                    max="2020"
                    // onChange={handleChange} 
                    required />
            </div>

            <div className="form-group">
                <label>Valor de mercado actual del vehículo</label>
                <input
                    // value={address} 
                    type="text"
                    className="form-control"
                    id="amount"
                    // onChange={handleChange} 
                    required />
            </div>
            <div className="form-group">
                <label>¿Cómo escuchó de Segurú? </label>
                <br />
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="recomendacion"
                        value="recomendacion"
                        class="custom-control-input"
                        name="aboutSeguru"
                    // onChange={getRadioBtnValue} 
                    />
                    <label class="custom-control-label" for="recomendacion">Recomendación de amigos</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="fb/ig"
                        value="fb/ig"
                        class="custom-control-input"
                        name="aboutSeguru"
                    // onChange={getRadioBtnValue} 
                    />
                    <label class="custom-control-label" for="fb/ig">Facebook/Instagram</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="google"
                        value="google"
                        class="custom-control-input"
                        name="aboutSeguru"
                    // onChange={getRadioBtnValue} 
                    />
                    <label class="custom-control-label" for="google">Google</label>
                </div>
            </div>
            <div className="form-group">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="termsCondition" required />
                    <label class="custom-control-label" for="termsCondition">
                        Acepto los términos y condiciones de uso y el aviso de privacidad y declaro que la información es verdadera
                    </label>
                </div>
            </div>

            <div className="form-group">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="termsCondition" />
                    <label class="custom-control-label" for="termsCondition">
                        Quiero que un asesor profesional de Segurú me contacte para brindarme más explicación
                    </label>
                </div>
            </div>
            <button
                className="btn btn-primary float-right"
                type="submit">
                Guardar
            </button>
        </>
    );
}

export default Forms;