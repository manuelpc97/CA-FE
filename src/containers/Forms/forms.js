import React, { Component } from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            name: '',
            id: '',
            email: '',
            phone: '',
            address: '',
            alreadyHasInsurance: false,
            selectedDay: null
            // name, id, email, phone, address 
        }
    }

    handleDayChange = (day) => {
        this.setState({ selectedDay: day });
    }

    // handleChange = event => {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    getInputValues = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    getRadioBtnValue = (event) => {
        console.log('event.target radio--->', event.target.id);
        const radioBtnSelected = event.target.id
        if (radioBtnSelected.indexOf("not") !== -1) {
            console.log('NO TIENE')
            this.setState({ alreadyHasInsurance: false })
        } else {
            console.log('SI TIENE')
            this.setState({ alreadyHasInsurance: true })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { email, username, password } = this.state
        // alert(`Your registration detail: \n 
        //    Email: ${email} \n 
        //    Username: ${username} \n
        //    Password: ${password}`)
    }

    next = () => {
        let currentStep = this.state.currentStep
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
                    Previous
      </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this.next}>
                    Next
      </button>
            )
        }
        return null;
    }

    render() {
        const {
            name,
            id,
            email,
            phone,
            address,
            alreadyHasInsurance,
            selectedDay,
        } = this.state;
        return (
            <div>
                {/* <p>Step {this.state.currentStep} </p> */}

                <div className="container" style={{
                    marginTop: "7%"
                }}>
                    < div className="row" >
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
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

                                {/* SecondPart */}
                                <SecondPart
                                    currentStep={this.state.currentStep}
                                    getRadioBtnValue={this.getRadioBtnValue}
                                    name={name}
                                    id={id}
                                    phone={phone}
                                    email={email}
                                    address={address}
                                    selectedDay={selectedDay}
                                    alreadyHasInsurance={alreadyHasInsurance}
                                    handleDayChange={this.handleDayChange}
                                />
                                {this.previousButton()}
                                {this.nextButton()}

                            </form>
                        </div>
                    </div>
                </div>
            </div >
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
        selectedDay,
        handleDayChange
    } = props;
    console.log('alreadyHasInsurance PROPS ---> ', alreadyHasInsurance);
    return (
        <>
            <div className="form-group">
                <label>¿Tiene actualmente una póliza de seguro de vehículo vigente?</label>
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
                                <select class="custom-select custom-select-sm">
                                    <option selected>Selecciona una opción</option>
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
                                    <input type="checkbox" class="custom-control-input" id="notSure" />
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
                    // onChange={getRadioBtnValue} 
                    />
                    <label class="custom-control-label" for="nuevoAgencia">Nuevo de Agencia</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="usadoAgencia"
                        value="usadoAgencia"
                        class="custom-control-input"
                        name="statusOfCar"
                    // onChange={getRadioBtnValue} 
                    />
                    <label class="custom-control-label" for="usadoAgencia">Usado de Agencia</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="importado"
                        value="importado"
                        class="custom-control-input"
                        name="statusOfCar"
                    // onChange={getRadioBtnValue} 
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
                    // onChange={getRadioBtnValue} 
                    />
                    <label class="custom-control-label" for="turismo">Turismo</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="pickup"
                        value="pickup"
                        class="custom-control-input"
                        name="kindOfCar"
                    // onChange={getRadioBtnValue} 
                    />
                    <label class="custom-control-label" for="pickup">Pick Up</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="camioneta"
                        value="camioneta/suv"
                        class="custom-control-input"
                        name="kindOfCar"
                    // onChange={getRadioBtnValue} 
                    />
                    <label class="custom-control-label" for="camioneta">Camionea/SUV</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio"
                        id="camion"
                        value="camion"
                        class="custom-control-input"
                        name="kindOfCar"
                    // onChange={getRadioBtnValue} 
                    />
                    <label class="custom-control-label" for="camion">Camion</label>
                </div>
            </div>
            <div className="form-group">
                <label>Marca del Vehículo</label>
                <select class="custom-select custom-select-sm">
                    <option selected>Selecciona una opción</option>
                    <option value="Seguro Atlántida">Toyota</option>
                    <option value="Ficohsa Seguros">Hyuindai</option>
                    <option value="Mapfre Seguros">Honda</option>
                </select>
            </div>
            <div className="form-group">
                <label>Modelo de Vehículo</label>
                <select class="custom-select custom-select-sm">
                    <option selected>Selecciona una opción</option>
                    <option value="Seguro Atlántida">Modelo 1</option>
                    <option value="Ficohsa Seguros">Modelo 2</option>
                    <option value="Mapfre Seguros">Modelo 3</option>
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
        </>
    );
}

export default Forms;