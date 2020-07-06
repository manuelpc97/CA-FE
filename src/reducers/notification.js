import {createReducer} from 'redux-create-reducer';

const initialState = {
    notification: false,
    message: '',
    type: ''
}

export const notification = createReducer(initialState,{
    ['NOTIFICATION']: (state = {}, action) => {
        return Object.assign({}, state, {
            notification: true, 
            message: action.payload.message,
            type: action.payload.type
        })
    }, 
    ['CLEAN_NOTIFICATION']: (state = {}, action) => {
        return Object.assign({},state, {
            notification: false, 
            message: '',
            type: ''
        });
    }
})