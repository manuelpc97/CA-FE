import {createReducer} from 'redux-create-reducer';

let initialState = {
    form: {},
    hasForm: false
}

export const form = createReducer(initialState, {
    ['GET_FORM_BY_ID']: (state = [], action) => {
        return Object.assign({}, state, {
            form: action.payload, 
            hasForm: true
        });
    },
    ['CLEAR_FORM']: (state = [], action) => {
        return Object.assign({}, state, {
            form: action.payload,
            hasForm: false
        });
    }
});