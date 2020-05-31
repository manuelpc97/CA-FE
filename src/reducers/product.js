import {createReducer} from 'redux-create-reducer';

let initialState = {
    products:[]
};

export const product = createReducer(initialState, {
    ['GET_PRODUCTS_BY_BUSINESS'] : (state = [], action) => {
        return Object.assign({}, state, {
            products: action.payload
        });
    },
    ['GET_PRODUCTS_BY_INSURANCE'] : (state = [], action) => {
        return Object.assign({}, state, {
            products: action.payload
        });
    },
    ['GET_ALL_PRODUCTS'] : (state = [], action) => {
        return Object.assign({}, state, {
            products: action.payload
        });
    }
});