import axios from '../apis/ca-be';

export default class CoverService{
    constructor(){
        this.baseUrl = '/cover';
    }
    async getCoverByProduct(productId){
        return await axios.get(this.baseUrl + '/get/' + productId);
    }
}