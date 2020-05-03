import {combineReducers} from 'redux';
import * as businessReducer from './business';
import * as coverReducer from './cover';
import * as productReducer from './product';
import * as insuranceReducer from './insurance';
import * as userReducer from './user';
import * as navigatorReducer from './navigator';
import * as errorReducer from './error';

export default combineReducers(Object.assign(
    businessReducer, 
    coverReducer, 
    productReducer, 
    insuranceReducer, 
    userReducer, 
    navigatorReducer, 
    errorReducer
));