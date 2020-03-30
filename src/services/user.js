import axios from '../apis/ca-be';


export default class User{
    constructor(){
        this.baseUrl = '/user';
    }

    async createUser(params){
        return await axios.post(this.baseUrl + '/create', params)
    }

    async logIn(params){
        return await axios.post(this.baseUrl + '/logIn', params);
    }
}