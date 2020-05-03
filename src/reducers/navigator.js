import {createReducer} from 'redux-create-reducer';

let initialState = {
    path: ''
}

export const navigator = createReducer(initialState, {
    ['CHANGE_PATH'] : (state  = {}, action) => {
        return Object.assign({}, state, {
            path: action.payload
        });
    }   
});