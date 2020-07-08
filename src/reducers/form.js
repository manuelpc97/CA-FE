import { createReducer } from 'redux-create-reducer';

let initialState = {
    form: {},
    hasForm: false,
    productsObtained: []
}

export const form = createReducer(initialState, {
    ['GET_FORM_BY_ID']: (state = [], action) => {
        return Object.assign({}, state, {
            form: action.payload,
            // productsObtained: action.payload,
            hasForm: true
        });
    },
    ['SAVED_FILLED_FORM']: (state = [], action) => {
        return Object.assign({}, state, {
            form: action.payload,
            // productsObtained: action.payload,
            hasForm: false,
        });
    },
    ['GET_PRODUCTS_OBTAINED']: (state = [], action) => {
        return Object.assign({}, state, {
            productsObtained: action.payload,
            form: action.payload,
            hasForm: false
        });
    },
    ['CLEAR_FORM']: (state = [], action) => {
        return Object.assign({}, state, {
            form: action.payload,
            // productsObtained: action.payload,
            hasForm: false
        });
    }
});