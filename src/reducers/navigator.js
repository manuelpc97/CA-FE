import {createReducer} from 'redux-create-reducer';

let initialState = {
    path: '', 
    params: {}
}

export const navigator = createReducer(initialState, {
    ['CHANGE_PATH'] : (state  = {}, action) => {
        return Object.assign({}, state, {
            path: action.payload.path, 
            params: action.payload.params
        });
    }   
});