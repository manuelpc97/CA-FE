import React, {Component} from 'react';
import BusinessService from '../services/business';
import ProductService from '../services/product';
import CoverService from '../services/cover';
import InsuranceService from '../services/insurance';
import ProductCard from './ProductCard';
import CoverModal from './CoverModal';
import CongratModal from './CongratModal';
import Form from '../containers/Forms/Form';

class Comparison extends Component{
    constructor(props){
        super(props);
        this.businessService = new BusinessService();
        this.productService = new ProductService();
        this.coverService = new CoverService();
        this.insuranceService = new InsuranceService()
        this.businessList = [];
        this.insuranceList = [];

        this.state = {
            businesses: [],
            currentProduct: {}, 
            currentBusiness: '',
            title: '',
            message: '', 
            showForm: false
        }
    }

    componentWillMount(){
        this.insuranceService.getAllInsurances().then(response => {
            console.log('RESPONSE: ', response.data);
            this.insuranceList = response.data;
        }, error => {
            console.log('[ERROR]', error);
        })
        this.businessService.getAllBusinesses().then((response) => {
            this.businessList = response.data;
            this.businessList.forEach((business, businessIndex) => {
                this.productService.getProductsByBusiness(business._id).then(response => {
                    business['products'] = response.data;
                    business.products.forEach((product, productIndex) => {
                        this.coverService.getCoverByProduct(product._id).then(response => {
                            product['covers'] = response.data;
                            if(businessIndex === (business.products.length-1)){
                                if(productIndex === (business.products.length-1)){
                                    this.setState({businesses: this.businessList});
                                }
                            }
                        }, error => {
                            console.log('[ERROR]', error);
                        });
                    });
                }, error => {
                    console.log('[ERROR]', error);
                })
            });
        }, (error) => {
            console.log('[ERROR]', error);
        })
    }

    render(){
        console.log('HAVING THE QUESTIONS: ', this.props.location.state.questions);
        let cards = [];

        console.log('state: ', this.state);
        this.state.businesses.forEach(business => {
            business.products.forEach(product => {
                cards.push(this.buildCard(business,product));
            });
        });

        return <div style = {{marginTop: '100px'}}>
                    {cards}
                    <CoverModal
                        modalID = 'coverModal'
                        product = {this.state.currentProduct}
                        business = {this.state.currentBusiness}
                        showCongrat = {this.showCongratModal.bind(this)}
                        showForm = {this.showForm.bind(this)}
                    /> 
                    <CongratModal title = {this.state.title} message = {this.state.message}/>
                    <Form questions = {this.getQuestions()} visible = {this.state.showForm} type = 'lf'
                    showCongrat = {this.showCongratModal.bind(this)}/>
                </div>
    }

    buildCard(business, product){
        return <ProductCard
        onModalOpened = {this.onModalOpened.bind(this)}
        business = {business.name}
        insurance = {this.insuranceList.filter(insurance => insurance._id === product.insurance)[0].name}
        product = {product}/>
    }

    onModalOpened(currentProduct, currentBusiness){
        this.setState({currentProduct,currentBusiness});
    }
    showCongratModal(title, message){
        this.setState({title, message});
    }
    showForm(){
        this.setState({showForm: true, title: 'FELICIDADES', message: 'Has obtenido tu seguro de vehiculo!!'})
    }
    getQuestions(){
        return [
            this.getQuestion('Fecha de Nacimiento', 'text', [], 0,''),
            this.getQuestion('Lugar de Nacimiento', 'email', [], 1,''),
            this.getQuestion('Estado Civil', 'text', [], 2,''),
            this.getQuestion('Ocupacion Actual', 'text', [], 3,''),
            this.getQuestion('Profesion u Oficio', 'text', [], 4,''),
            this.getQuestion('Nombre de la Empresa', 'text', [], 5,''),
            this.getQuestion('Posicion o Cargo', 'text', [], 6,''),
            this.getQuestion('Antigüedad Laboral','text', [], 7,''),
            this.getQuestion('Direccion completa de Residencia','text', [], 8,''),
            this.getQuestion('Ingresos Mensuales','text', [], 9,''),
            this.getQuestion('Gastos Mensuales','text', [], 10,''),
            this.getQuestion('Antigüedad Laboral','text', [], 11,''),
            this.getQuestion('Activos Aproximados','text', [], 12,''),
            this.getQuestion('Pasivos Aproximados','text', [], 13,''),
            this.getQuestion('Tipo de Poliza','text', [], 14,''),
            this.getQuestion('Tipo de divisa para la emisión de la póliza','text', [], 15,''),
            this.getQuestion('Numero de Placa','text', [], 16,''),
            this.getQuestion('Serie de chasis','text', [], 17,''),
            this.getQuestion('Serie de motor','text', [], 18,''),
            this.getQuestion('Uso del vehiculo','text', [], 19,''),
            this.getQuestion('Valor de Mercado Actual de Vehiculo','text', [], 20,'')  
        ]
    }

    getQuestion(question, type, options, id,answer){
        return {question, type, options, id, answer};
    }
}

export default Comparison;