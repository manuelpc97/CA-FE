import {combineReducers} from 'redux';
import businessReducer from './business';
import insuranceReducer from './insurance';
import productReducer from './product';

export default combineReducers({
    businesses: businessReducer, 
    insurances: insuranceReducer, 
    products: productReducer
});