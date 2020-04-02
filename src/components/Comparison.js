import React, {Component} from 'react';
import BusinessService from '../services/business';
import ProductService from '../services/product';
import CoverService from '../services/cover';
import InsuranceService from '../services/insurance';
import ProductCard from './ProductCard';
import CoverModal from './CoverModal';

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
            currentBusiness: ''
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
                    /> 
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
}

export default Comparison;