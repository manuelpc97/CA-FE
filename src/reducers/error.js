import {createReducer} from 'redux-create-reducer';

const initialState = {
    error: false,
    message: ''
}

export const error = createReducer(initialState,{
    ['ERROR']: (state = {}, action) => {
        return Object.assign({}, state, {
            error: true, 
            message: action.payload
        })
    }, 
    ['CLEAN_ERROR']: (state = {}, action) => {
        return Object.assign({},state, {
            error: false, 
            message: action.payload
        });
    }
})