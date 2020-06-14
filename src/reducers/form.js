import {createReducer} from 'redux-create-reducer';

let initialState = {
    form: {}
}

export const form = createReducer(initialState, {
    ['GET_FROM_BY_ID']: (state = [], action) => {
        return Object.assign({}, state, {
            form: action.payload
        });
    }
});