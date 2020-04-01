import axios from '../apis/ca-be';

export default class BusinessService{
    constructor(){

        this.baseURL = '/business';
    }
    getAllBusinesses(){
        return axios.get(this.baseURL + '/get');
    }
}