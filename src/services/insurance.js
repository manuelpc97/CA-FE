import axios from '../apis/ca-be';

export default class Insurance{
    constructor(){
        this.baseUlr = 'insurance';
    }

    async getAllInsurances(){
        return await axios.get(this.baseUlr + '/get');
    }

    async createInsurance(params){
        return await axios.post(this.baseUlr + '/create', params);
    }
}