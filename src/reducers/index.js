import {combineReducers} from 'redux';
import businessReducer from './business';
import insuranceReducer from './insurance';
import productReducer from './product';
import coverReducer from './cover';

export default combineReducers({
    businesses: businessReducer, 
    insurances: insuranceReducer, 
    products: productReducer, 
    covers: coverReducer
});