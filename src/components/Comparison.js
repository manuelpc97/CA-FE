import React, {Component} from 'react';
import BusinessService from '../services/business';
import ProductService from '../services/product';
import CoverService from '../services/cover';

class Comparison extends Component{
    constructor(props){
        super(props);
        this.businessService = new BusinessService();
        this.productService = new ProductService();
        this.coverService = new CoverService();

        this.businessList = [];
    }

    componentWillMount(){
        this.businessService.getAllBusinesses().then((response) => {
            this.businessList = response.data;
            this.businessList.forEach(business => {
                this.productService.getProductsByBusiness(business._id).then(response => {
                    business['products'] = response.data;
                    business.products.forEach(product => {
                        this.coverService.getCoverByProduct(product._id).then(response => {
                            product['covers'] = response.data;
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
        return (<div>COMPARISON COMPONENT</div>);
    }
}

export default Comparison;