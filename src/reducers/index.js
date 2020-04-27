import {combineReducers} from 'redux';
import * as businessReducer from './business';
import * as coverReducer from './cover';
import * as productReducer from './product';
import * as insuranceReducer from './insurance';
import * as userReducer from './user';

export default combineReducers(Object.assign(
    businessReducer, 
    coverReducer, 
    productReducer, 
    insuranceReducer, 
    userReducer
));