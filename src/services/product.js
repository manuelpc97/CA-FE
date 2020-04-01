import axios from '../apis/ca-be';

export default class ProductService{
    constructor(){
        this.baseUrl = '/product';
    }

    async getProductsByBusiness(businessId){
        return await axios.get(this.baseUrl + '/get/' + businessId);
    }
}