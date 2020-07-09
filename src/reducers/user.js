import {createReducer} from 'redux-create-reducer';

let initialState = {
    currentUser: {},
    isAuth: false
};

export const user = createReducer(initialState, {
    ['LOG_IN'] : (state = {}, action) => {
        return Object.assign({}, state,{
            currentUser: action.payload, 
            isAuth: true
        });
    },
    ['LOG_OUT'] : (state = {}, action) => {
        return Object.assign({}, state,{
            currentUser: action.payload, 
            isAuth: false
        });
    }
});