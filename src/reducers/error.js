import {createReducer} from 'redux-create-reducer';

const initialState = {
    error: false,
    message: '',
    type: ''
}

export const error = createReducer(initialState,{
    ['ERROR']: (state = {}, action) => {
        return Object.assign({}, state, {
            error: true, 
            message: action.payload.message,
            type: action.payload.type
        })
    }, 
    ['CLEAN_ERROR']: (state = {}, action) => {
        return Object.assign({},state, {
            error: false, 
            message: '',
            type: ''
        });
    }
})