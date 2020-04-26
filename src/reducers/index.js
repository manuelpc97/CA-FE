import {combineReducers} from 'redux';
import businessReducer from './business';
import insuranceReducer from './insurance';

export default combineReducers({
    businesses: businessReducer, 
    insurances: insuranceReducer
});