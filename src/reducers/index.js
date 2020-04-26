import {combineReducers} from 'redux';
import businessReducers from './business';

export default combineReducers({
    businesses: businessReducers
});