import React, { Component } from 'react';
import InsuranceService from '../../services/insurance';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            insurances: [],
            insuranceCards: ''
        }
        this.insuranceService = new InsuranceService();
    }

    componentDidMount() {
        this.insuranceService.getAllInsurances().then(response => {
            console.log('response----> ', response.data);
            this.setState({ insurances: response.data });
        }, (error) => {
            console.log('[ERROR]', error);
        });
    }

    renderInsuranceCards() {
        const { insurances } = this.setState
        let cards;
        console.log('insurances', insurances);

        if (insurances.lenght > 0) {
            cards = insurances.map(insurance => {
                return (
                    <>
                        <div class="col mb-4">
                            <div class="card h-100" style={{
                                borderRadius: "4%",
                                border: "outset"
                            }}>
                                <div style={{ textAlign: "center", marginTop: "2%" }}>

                                    <h5 class="card-title" style={{ fontFamily: "sans-serif" }}>{insurance.name}</h5>
                                    <img src="images/car.png" class="card-img-top" alt="..."
                                        style={{
                                            width: "21%",
                                            margin: "5%"
                                        }} />
                                </div>
                                <div class="card-body" style={{ padding: "0% !important" }}>
                                    <div style={{
                                        backgroundColor: "rgb(255, 89, 63)",
                                        textAlign: "center"
                                    }}>
                                        <button style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "20px",
                                            display: "contents",
                                            color: "white",
                                            cursor: "pointer"
                                        }}>Solicita Información</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
            this.setState({ insuranceCards: cards })
            // return (
            //     <>

            //     </>
            // )
        }

        return <><div><h5>No se encontraron productos</h5></div></>
    }
    render() {
        const { insurances } = this.state;
        let cards;
        if (!(insurances.lenght === 0)) {
            cards = insurances.map((insurance, index) => {
                return (
                    <>
                        <div key={index} class="col mb-4">
                            <div class="card h-100" style={{
                                borderRadius: "4%",
                                border: "outset"
                            }}>
                                <div style={{ textAlign: "center", marginTop: "2%" }}>

                                    <h5 class="card-title" style={{ fontFamily: "sans-serif" }}>{insurance.name}</h5>
                                    {/*images/car.png*/}
                                    <img src={`/images/${insurance.name}`} class="card-img-top" alt="..."
                                        style={{
                                            width: "21%",
                                            margin: "5%"
                                        }} />
                                </div>
                                <div class="card-body" style={{ padding: "0% !important" }}>
                                    <div style={{
                                        backgroundColor: "rgb(255, 89, 63)",
                                        textAlign: "center"
                                    }}>
                                        <a style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "20px",
                                            display: "contents",
                                            color: "white",
                                            cursor: "pointer"
                                        }} href="/form">Solicita Información</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        } else {
            cards = <><div><h5>No se encontraron productos</h5></div></>
        }

        return (
            <div>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/name.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/carousel.png" class="d-block w-100" alt="..." />
                        </div>
                        {/* <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                        </div> */}
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h6>¿Andas buscando seguros? </h6>
                    <h6> Igual que tu nos preocupamos por el bienestar de tus seres queridos, busca en nuestro catologo que producto es el ideal para ti</h6>
                </div>
                <hr></hr>
                <div class="row row-cols-1 row-cols-md-3" style={{ margin: "4%" }}>
                    {cards}
                </div >

            </div>
        )
    }
}

export default Home;